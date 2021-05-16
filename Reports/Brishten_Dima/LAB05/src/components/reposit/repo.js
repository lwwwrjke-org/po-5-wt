
import React from 'react';
import './rep.css';

export default class Repo extends React.Component
{
    render() {
        const {repos} = this.props;
    return (
        <div className='repos' onClick={() => document.location.href = repos.html_url}>
            <p>{repos.name}</p>
            <p style={{ fontSize: 15, color: 'red' }}>{repos.language}</p>
        </div>
    );
    }
}
