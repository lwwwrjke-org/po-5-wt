export const getUserFromGitGub = async (login) =>
{
    let response = await fetch(`https://api.github.com/users/${login}`);

    if (response.ok)
    {
        return await response.json();
    }
}

export const getUserRepos = async (login) =>
{
    let response = await fetch(`https://api.github.com/users/${login}/repos`);

    if (response.ok)
    {
        return await response.json();
    }
}