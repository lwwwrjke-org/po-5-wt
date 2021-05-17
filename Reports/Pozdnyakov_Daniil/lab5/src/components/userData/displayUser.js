import React from 'react';
import UserInfo from './dataUser';
import Repos from '../reposit/repos';

export default class UserProfile extends React.Component
{
    render() 
    {

    const {user, rep, displayModes, icon} = this.props;

    return (
        <div>
            <div>
                  {user ? <UserInfo icon={icon} user={user} /> : ''}
                </div>
                <div style={{marginLeft: 50}}>
                    {rep ? <Repos displayModes={displayModes} rep={rep} /> : ''}
                </div>
        </div>
    )
    }
}