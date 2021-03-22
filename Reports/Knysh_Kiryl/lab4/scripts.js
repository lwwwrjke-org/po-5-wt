getData = async (event) => {
    event.preventDefault()
    var username = event.target.elements.username.value;
    if (username === '') {
        alert('U typed nothing')
    } else {
        const USER_API_URL = await fetch(`https://api.github.com/users/${username}`);
        const USER_REPOS_API_URL = await fetch(`https://api.github.com/users/${username}/repos`)   
        .then(async (res) => {
            resStatus = res.status
            console.log(resStatus)
            if (resStatus === 200) {
                const userData = await USER_API_URL.json();
                const userRepos = await res.json();

                console.log(userData)
                console.log(userRepos)

                dataContainer = document.querySelector('.data');
                dataContainer.innerHTML = '<div>Username: ' + userData.login + '</div>' + '<div>Name: ' + userData.name + '</div>' + '<div>Followers: ' + userData.followers + '</div>'
                if (userRepos.length !== 0) {
                    dataContainer.innerHTML += '<ul></ul>'
                    userRepos.forEach(function(repo) {
                        document.querySelector('ul').innerHTML += '<li>' + repo.full_name + '</li>'
                    })
                } else {
                    dataContainer.innerHTML += '<div>There are no user repos</div>'
                }
            }
            if (resStatus === 404) {
                alert('Wrong username')
            }
        })
        .catch(error => alert(error.message));
    }
}