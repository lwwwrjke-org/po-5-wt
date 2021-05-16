
async function searchUser()
{
    let page = document.getElementById('page');
    let user = document.getElementById('login').value;
    let search = await fetch(`https://api.github.com/users/${user}`);

    if (search.ok)
    {
        let userGithub = await search.json();
        let text = document.createElement('div');
        text.textContent = "Аватар";
        page.append(text);
        let avatar = document.createElement('img')
        avatar.src = userGithub.avatar_url;
        avatar.width = 110;
        avatar.height = 110;
        page.append(avatar);

        let numberFollowers = document.createElement('div');
        numberFollowers.textContent = `Число фолловеров: ${userGithub.followers}`;
        page.append(numberFollowers);

        search = await fetch(`https://api.github.com/users/${user}/repos`)
        let Span = document.createElement('div');

        let rep = document.createElement('div');
        rep.textContent = "Видимые репозитории:";
        page.append(rep);

        let repos = await search.json();
        repos.forEach((item) => {
            let span = document.createElement('span');
            span.textContent = item.name;
            span.append(document.createElement('br'));
            Span.append(span);
        })
        page.append(Span);

        await new Promise((resolve, reject) => setTimeout(resolve, 5000));
        text.remove();
        avatar.remove();
        numberFollowers.remove();
        rep.remove();
        Span.remove();
    }
    else
    {
        span = document.createElement('span');
        span.textContent = "Не нашёл";
        page.append(span);
        await new Promise((resolve, reject) => setTimeout(resolve, 3000));
        span.remove();
    }
}