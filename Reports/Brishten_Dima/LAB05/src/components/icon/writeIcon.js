
import React from 'react';
import Icon from './icon';

export default class IconText extends React.Component 
{
    render() {

    const {icon, login, link} = this.props;
    
    return (
        <div>
            <Icon icon={icon} />
            {link ? <div><a href={link} style={{fontSize: 20, color: 'blue'}}>{login}</a></div> : <div>{login}</div>}
        </div>
    );
    }
}
