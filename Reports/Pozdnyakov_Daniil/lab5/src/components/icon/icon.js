import React from 'react';

export default class Icon extends React.Component 
{
    render() {

    const {icon} = this.props;

    return (
        <i className={`fa fa-${icon}`} style={{fontSize: 250}}/>
    );
    }
}