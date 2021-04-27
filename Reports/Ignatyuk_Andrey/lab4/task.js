async function fetch_account_info() {
  var username = prompt('Enter username to search: ', 'yallknow');

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
  info.innerHTML = '<h1>' + user.name + '</h1><p>' + user.login + '</p>';
  info.innerHTML += '<br></br><h2>Repositories:</h2><table><th></th></table>';

  if (user_repos.length != 0) {
    user_repos.forEach(function(repository) {
      document.querySelector('th').innerHTML +=
          '<p>' + repository.full_name + '</p>'
    })
  }

  info.innerHTML += '<br></br><p>' + user.followers + ' Followers</p>';
}

fetch_account_info();
