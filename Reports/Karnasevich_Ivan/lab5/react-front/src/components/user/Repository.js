import React from 'react'
import s from './Repositories.module.css'

const Repository = ({repository}) => {
    return (

            <a className={s.repositoryItem} href={repository.html_url}>
                <div>{`${repository.name}`}</div>
            </a>
    )
}

export default Repository
