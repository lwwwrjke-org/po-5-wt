import React, {useState} from 'react'
import UserData from "./UserData";
import Repositories from "./Repositories";
import s from './User.module.css'
import sr from './Repositories.module.css'

const User = ({userData, userRepositories}) => {

    const [repoClass, setRepoClass] = useState(sr.repositoriesContainer)

    const switchView = () => {
        if (repoClass === sr.repositoriesContainerTiled)
            setRepoClass(sr.repositoriesContainer)
        else setRepoClass(sr.repositoriesContainerTiled)
    }

    return (
        <div>
            <header>
                <div>
                    To switch user, change last url param.
                </div>
                <button onClick={switchView}>Switch view</button>
            </header>
            <div className={s.gridContainer}>
                <UserData userData={userData}/>
                <Repositories repositories={userRepositories} className={repoClass}/>
            </div>
        </div>
    )
}

export default User
