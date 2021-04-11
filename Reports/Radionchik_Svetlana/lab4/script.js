class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }  
  }
  
  async function getGithubUser() {
    let user, repos;

    while(true) {
      let name = prompt("Введите имя пользователя", "lwwwr");
      try {
        user = await loadJson(`https://api.github.com/users/${name}`)
        repos = await loadJson(`https://api.github.com/users/${name}/repos`)
        break;
      } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        } else {
          throw err;
        }
      }
    }

    output = document.querySelector('.imgUsr');
    output.innerHTML = `<img class="imgUsr" src="${user.avatar_url}"/>`
    output = document.querySelector('.repData');
    output.innerHTML = '<div> <h1>'+user.name + '</h1> </div><div>'+user.login + '</div>' + '<div>' + user.followers + ' followers</div>'
    output.innerHTML += '<h2>Repositories:</h2><ul></ul>'
    if (repos.length !== 0) {
        repos.forEach(function(repo) {
            document.querySelector('ul').innerHTML += '<li>' + repo.full_name + '</li>'
        })
    } else {
        output.innerHTML += '<div>There are no user repositories</div>'
    }
  }
  
  getGithubUser();
