
import React from 'react';
import IconText from '../icon/writeIcon';
import './dataUser.css';

export default class UserInfo extends React.Component
{
    render() {
    const {icon, user} = this.props;
    return (
        <div>
            <IconText icon={icon} login={user.login} link={user.html_url} />
            <br />
            <div className='pro'>{user.bio}</div>
            <div className='text'>{user.followers} followers</div>
            <div className='text'>{user.following} following</div>
            <div className='text'>{user.location}</div>
        </div>
    );
    }
}
