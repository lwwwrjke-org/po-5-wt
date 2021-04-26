import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Repo = ( { repo } ) => 
{
    return (
        <div className='repo' onClick={() => document.location.href = repo.html_url}>
            <p>{repo.name}</p>
            <p style={{ fontSize: 13 }}>{repo.language}</p>
        </div>
    );
}

Repo.propTypes = 
{
    repo: PropTypes.object.isRequired,
};

export default Repo;
