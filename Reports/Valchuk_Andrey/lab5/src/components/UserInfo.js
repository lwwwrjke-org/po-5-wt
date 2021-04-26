import React from 'react';
import PropTypes from 'prop-types';
import IconText from './IconText';

const UserInfo = ( { icon, user } ) => 
{
    return (
        <div>
            <IconText icon={icon} login={user.login} link={user.html_url} />
            <br />
            <div>{user.bio}</div>
            <div>{user.followers} followers</div>
            <div>{user.following} following</div>
            <div>{user.location}</div>
        </div>
    );
}

UserInfo.propTypes = 
{
    icon: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
};

export default UserInfo;