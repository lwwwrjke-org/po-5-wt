const injectData = (containerId, userData, userRepos) => {
    const dataContainer = document.getElementById('data');
    dataContainer.innerHTML =
        `<div><img src="${userData.avatar_url}" alt=""/></div>
                <div>Username: ${userData.login}</div>
                <div>Followers: ${userData.followers}</div>`

    if (userRepos.length === 0) {
        dataContainer.innerHTML += '<div>No repos</div>'
        return
    }

    dataContainer.innerHTML += '<ul>'
    userRepos.forEach(repo => {
        dataContainer.innerHTML +=
            `<li><a href="${repo.html_url}">${repo.full_name}</a></li>`
    })
    dataContainer.innerHTML += '</ul>'
}

const fetchData = async (event) => {
    event.preventDefault()
    const username = event.target.elements.username.value;
    const baseUrl = 'https://api.github.com/users/'
    const USER_API_URL = await fetch(`${baseUrl}${username}`);
    const USER_REPOS_API_URL = await fetch(`${baseUrl}${username}/repos`)

    if (USER_REPOS_API_URL.status === 404) {
        alert('No such user')
        return
    }

    const userData = await USER_API_URL.json();
    const userRepos = await USER_REPOS_API_URL.json();

    injectData('data', userData, userRepos)
}