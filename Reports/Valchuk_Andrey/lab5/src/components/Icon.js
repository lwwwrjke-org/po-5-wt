import React from 'react';
import PropTypes from 'prop-types';

const Icon = ( { icon } ) => 
{
    return (
        <i className={`fa fa-${icon}`} style={{fontSize: 250}}/>
    );
}

Icon.propTypes = 
{
    icon: PropTypes.string.isRequired,
};

export default Icon;