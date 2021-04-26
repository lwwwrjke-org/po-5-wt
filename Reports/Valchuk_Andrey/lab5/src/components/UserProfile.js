import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo';
import Repos from './Repos';

const UserProfile = ({ user, repos, displayModes, icon }) => 
{
    return (
        <div className='row p-0 m-0'>
            <div className='col-3 p-0'>
                  {user ? <UserInfo icon={icon} user={user} /> : ''}
                </div>
                <div className='col p-0' style={{marginLeft: 50}}>
                    {repos ? <Repos displayModes={displayModes} repos={repos} /> : ''}
                </div>
        </div>
    )
}

UserProfile.propTypes = 
{
    user: PropTypes.object,
    repos: PropTypes.arrayOf(PropTypes.object),
    displayModes: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.string,
}

export default UserProfile;
