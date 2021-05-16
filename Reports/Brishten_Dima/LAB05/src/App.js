
import GetUserLogin from './components/inputUserLogin/userLogin';
import { useState } from 'react';
import UserProfile from './components/userData/displayUser';

async function userGithub(userLogin)
{
    let search = await fetch(`https://api.github.com/users/${userLogin}`);

    if (search.ok)
    {
        return await search.json();
    }
}

async function userRep (userLogin)
{
    let search = await fetch(`https://api.github.com/users/${userLogin}/repos`);

    if (search.ok)
    {
        return await search.json();
    }
}

export default function App() 
{
    const [state, setState] = useState({
        user: null,
        rep: null,
        msgError: '',
    });

    const displayModes = ['1fr', '1fr 1fr', '1fr 1fr 1fr'];
    const icons = ['user-md', 'user', 'user-plus'];  

    const randIcon = () => icons[Math.floor(Math.random() * icons.length)];
  

    async function User(userLogin) 
    {
        if (userLogin === '') 
        {
            setState({
                user: state.user,
                rep: state.rep,
                msgError: 'Пустой ввод',
            });
        }
        else 
        {
            let user = await userGithub(userLogin);

            if (user)
            {
                setState({
                    user,
                    rep: await userRep(userLogin),
                    msgError: '',
                });
            }
            else
            {
                setState({
                    user: state.user,
                    rep: state.rep,
                    msgError: 'Не найдено',
                });
            }
        }
    }

    return (
        <div>
            <div>
                <GetUserLogin msgError={state.msgError} onGet={User} />
            </div>
            <div>
                <UserProfile user={state.user} rep={state.rep} displayModes={displayModes} 
                    icon={randIcon()} />
            </div>
        </div>
    );
}

