getData = async (event) => {
    event.preventDefault()
    var username = event.target.elements.username.value;
    if (username === '') {
        alert('Введите никнейм пожалуйста')
    } else {
        const USER_API_URL = await fetch(`https://api.github.com/users/${username}`);
        const USER_REPOS_API_URL = await fetch(`https://api.github.com/users/${username}/repos`)   
        .then(async (res) => {
            resStatus = res.status
            console.log(resStatus)
            if (resStatus === 200) {
                const userData = await USER_API_URL.json();
                const userRepos = await res.json();

                console.log(userData);
                console.log(userRepos);
                dataContainer = document.querySelector('.data');
                dataContainer.innerHTML = '<div>Имя: ' + userData.name + '</div><div>Никнейм: ' + userData.login + '</div>' + '<div>Подпищики: ' + userData.followers + '</div><div><img src="' + userData.avatar_url + '"/></div><div>Репозитории:</div>'
                if (userRepos.length !== 0) {
                    dataContainer.innerHTML += '<ul></ul>'
                    userRepos.forEach(function(repo) {
                        document.querySelector('ul').innerHTML += '<li>'+ repo.full_name + '</li>'
                    })
                } else {
                    dataContainer.innerHTML += '<div>У этого пользователя нет репозиториев</div>'
                }
            }
            if (resStatus === 404) {
                alert('Ошибка никнейма')
            }
        })
        .catch(error => alert(error.message));
    }
} 