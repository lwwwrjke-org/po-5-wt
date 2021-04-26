import GetUserLogin from './components/GetUserLogin';
import { useState } from 'react';
import { getUserFromGitGub, getUserRepos } from './fetchFromGitHub';
import UserProfile from './components/UserProfile';

const App = () => 
{
    const [state, setState] = useState({
        user: null,
        repos: null,
        errorMsg: '',
    });

    const displayModes = ['1fr', '1fr 1fr', '1fr 1fr 1fr'];
    const icons = ['hand-spock-o', 'frown-o', 'rocket', 'user-secret', 'github'];

    const getRandomIcon = () => icons[Math.floor(Math.random() * icons.length)];


    const getUser = async (login) => 
    {
        if (login === '') 
        {
            setState({
                user: state.user,
                repos: state.repos,
                errorMsg: 'Can\'t be empty!',
            });
        }
        else 
        {
            let user = await getUserFromGitGub(login);

            if (user)
            {
                setState({
                    user,
                    repos: await getUserRepos(login),
                    errorMsg: '',
                });
            }
            else
            {
                setState({
                    user: state.user,
                    repos: state.repos,
                    errorMsg: 'Wrong User Login',
                });
            }
        }
    }

    return (
        <div className='container'>
            <div className='row mt-3'>
                <GetUserLogin errorMsg={state.errorMsg} onGet={getUser} />
            </div>
            <div className='row mt-5'>
                <UserProfile user={state.user} repos={state.repos} displayModes={displayModes} 
                    icon={getRandomIcon()} />
            </div>
        </div>
    );
}

export default App;
