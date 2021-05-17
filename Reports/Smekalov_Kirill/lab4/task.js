async function getUser()
{
    let profile = document.getElementById("profile");

    profile.innerHTML = "";

    let userLogin = document.getElementById("login").value;

    let response = await fetch(`https://api.github.com/users/${userLogin}`);

    if (response.ok)
    {
        let user = await response.json();

        let avatarHeading = document.createElement("p");
        avatarHeading.textContent = "Avatar";
        profile.appendChild(avatarHeading);

        let avatar = document.createElement("img")
        avatar.src = user.avatar_url;
        avatar.height = 100;
        avatar.width = 100;
        profile.appendChild(avatar);

        let followersCount = document.createElement("p");
        followersCount.textContent = `Number of followers: ${user.followers}`;
        profile.appendChild(followersCount);

        let reposHeading = document.createElement("p");
        reposHeading.textContent = "Repositories";
        profile.appendChild(reposHeading);

        response = await fetch(`https://api.github.com/users/${userLogin}/repos`)

        let reposList = document.createElement("ul");

        for (let repo of await response.json())
        {
            let repoItem = document.createElement("li");
            let repoUrl = document.createElement("a");

            repoUrl.href = repo.html_url;
            repoUrl.textContent = repo.name;

            repoItem.appendChild(repoUrl);     
            reposList.appendChild(repoItem);
        }

        profile.appendChild(reposList);
    }
    else
    {
        profile.textContent = "Wrong User Login";
    }
}