import React from 'react'
import Repository from './Repository';


const Repositories = ({repositories, className}) => {
    return (
        <div className={className}>
            {repositories.map(repo => (
                <Repository key={repo.id} repository={repo}/>
            ))}
        </div>
    )
}

export default Repositories
