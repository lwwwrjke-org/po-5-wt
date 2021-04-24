import React from 'react'
import Avatar from "./Avatar";
import IconText from "./IconText";
import icon from './person.png'

const UserData = ({userData}) => {
    return (
        <div style={{margin: 2}}>
            <Avatar path={userData.avatar_url}/>
            <div>{userData.login}</div>
            <div>{userData.name}</div>
            <div>{`Public repositories count: ${userData.public_repos}`}</div>
            <IconText
                icon={icon}
                child={<span>{userData.followers} followers</span>}/>
        </div>
    )
}

export default UserData
