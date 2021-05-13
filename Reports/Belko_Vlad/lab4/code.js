async function fetch_account_info() {
  var username = prompt('Enter username to search: ', 'Stas');

  let user = await fetch(`https://api.github.com/users/${username}`);

  if (user.status != 200) {
    alert('Can not fetch!');
    return;
  }

  let user_repos =
      await fetch(`https://api.github.com/users/${username}/repos`);

  if (user_repos.status != 200) {
    alert('Can not fetch!');
    return;
  }

  user = await user.json();
  user_repos = await user_repos.json();

  info = document.querySelector('.avatar');
  info.innerHTML = `<img class="avatar" src="${user.avatar_url}"/>`;

  info = document.querySelector('.info');
  info.innerHTML = '<div class = "font"><h1>' + user.name + '</h1><p>' + user.login + '</p></div>';
  info.innerHTML += '<div class = "font"><br></br><h2>Repositories:</h2><table><th></th></table></div>';

  if (user_repos.length != 0) {
    user_repos.forEach(function(repository) {
      document.querySelector('th').innerHTML +=
          '<div class = "font"><li align="left">' + repository.full_name + '</li>'
    })
  }

  info.innerHTML += '<div class = "font"><br></br><p>' + user.followers + ' Followers</p></div>';
}

fetch_account_info();