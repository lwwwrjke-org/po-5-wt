import React, {useEffect, useState} from 'react'
import User from "./User";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com/users/'
})

const fetchData = (url, setter) => {
    axiosInstance.get(url)
        .then(r => setter(r.data))
}

const UserContainer = (props) => {

    const username = props.match.params.username

    const [userData, setUserData] = useState({})
    useEffect(() => fetchData(username, setUserData), [username])

    const [userRepositories, setUserRepositories] = useState([])
    useEffect(() => fetchData(`${username}/repos`, setUserRepositories), [username])

    return (
        <User userData={userData} userRepositories={userRepositories}/>
    )
}

export default UserContainer
