import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const IconText = ( { icon, login, link } ) => 
{
    return (
        <div>
            <Icon icon={icon} />
            {link ? <div><a href={link}>{login}</a></div> : <div>{login}</div>}
        </div>
    );
}

IconText.propTypes = 
{
    icon: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default IconText;