import './Profile.scss'
import Axios from 'axios'
import { useState } from 'react'

const Profile = () => {

    const [data, setData] = useState('')
    const [repos, setRepos] = useState('')
    const [view, setView] = useState(false)

    function changeView(event) {
        setView(true)
        {view ? setView(false) : setView(true)}
    }

    function getData(event) {
        event.preventDefault();
        var login = event.target.elements.login.value;
        Axios
        .get(`https://api.github.com/users/${login}`)
        .then((response) => {
            setData(response.data)
            console.log(response)
        })
        .catch((error) => {
            alert(error)
        })

        Axios
        .get(`https://api.github.com/users/${login}/repos`)
        .then((response) => {
            setRepos(response)
        })
        .catch((error) => {
            alert(error)
        })
    }   
    return(
        <div className="profile">
            <form onSubmit={getData}>
                <input type="text" name="login" placeholder="Github login.."></input>
                <button>Get data</button>
                
            </form>
                { repos ?
                 <div className="data">
                    <div>login: { data.login }</div>
                    <div>name: {data.name}</div>
                    <div>company: {data.company}</div>
                    <div>followers: {data.followers}</div>
                    <div>location: {data.location}</div>
                    <img src={data.avatar_url}/>
                    Repos: 
                    <div className={`${view ? "grid" : "row"}`}>
                        {repos.data.map((repo) => 
                            <div className="repo" key={repo.id} >
                                {repo.name} 
                            </div>
                        )}
                    </div>
                    <div>
                        <button onClick={changeView}>Change View</button>
                    </div>
                 </div> 
                 :
                 <></>
                }
        </div>
    )
}

export default Profile