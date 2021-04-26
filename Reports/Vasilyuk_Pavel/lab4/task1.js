document.getElementById('btn-search').addEventListener("click", () => {
    const user = (document.getElementById('search').value);
    console.log(user);
    fetch(
        `https://api.github.com/users/${user}`,
        {
            method: 'GET',
        }
    ).then(
        response => response.json()
    ).then(
        data => {
            document.getElementById('avatar').innerHTML = `<img style="border-radius: 50%" src="${data.avatar_url}">`;
            if (data.name != null) {
                document.getElementById('fio').innerHTML = `${data.name}`;
            }
            document.getElementById('login').innerHTML = `${data.login}`;
            if(data.bio != null) {
                document.getElementById('bio').innerHTML = `${data.bio}`;
            }
            document.getElementById('followers').innerHTML = `<a style="color:black;" href="https://github.com/${user}?tab=followers">
            <span style="font-weight: bold;">${data.followers}</span> followers</a> &middot;
            <a style="color:black;" href="https://github.com/${user}?tab=following"><span style="font-weight: bold;">${data.following}</span>
            following</a>`;
            if(data.company != null) {
                document.getElementById('company').innerHTML = `${data.company}`;
            }
            if(data.location != null) {
                document.getElementById('location').innerHTML = `${data.location}`;
            }
            if(data.email != null) {
                document.getElementById('email').innerHTML = `${data.email}`;
            }
            document.getElementById('view').style.display  =  '';
        }
    ).then(
        fetch(
            `https://api.github.com/users/${user}/repos`,
            {
                method: "GET",
            }
        ).then(
            response => response.json()
        ).then(
            data => {
                let html = '<br><br>Public repositories<br><br><br>';
                if (data.length != 0) {   
                    html += '<div class="collumns">';
                    for (let i = 0, j = 0; i < data.length; i++) {
                        let k = (i % 2) ? 3 : 1;
                        if (k == 1) j++;
                        if (data[i]['description'] == null) {
                            data[i]['description'] = '';
                        }
                        if (data[i]['language'] == null) {
                            data[i]['language'] = '';
                        }
                        html += `<div class="container_2" style="grid-column: col ${k}/ span 2;grid-row: row ${j};">
                        <a href="${data[i]['html_url']}">${data[i]['name']}</a><br><br>
                        ${data[i]['description']}<br><br>
                        ${data[i]['language']}
                        </div>`;
                    }
                    html += '</div>';
                    document.getElementById('repos').innerHTML = html;
                } else {
                    html += `<div style="font-size: 26px; font-weight: bold"><center>${user} doesn’t have any public repositories yet</center></div>`
                    document.getElementById('repo').innerHTML = html;
                }
            }
        )
    );
}) 