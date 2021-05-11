import {useState} from "react"

const Repos = ( {dataUser, repositoriu} ) => {
    const [reposOfUser, setreposOfUser] = useState([])

    return (
        <div>
            <div className="row">
                {repositoriu.map(userRepoData => 
                    <div className={reposOfUser}> 
                        <div class="repos">
                            <div className="row">
                                <div className="col-12">
                                    <a href={`https://github.com/${dataUser.login}/${userRepoData.name}`}>
                                        <div class="repoNames"> {userRepoData.name} </div>
                                    </a>
                                    <div> {userRepoData.description}</div>        
                                    <p></p>
                                    <p class="lang">{userRepoData.language}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div class="mainTable">
                <table>         
                    <div class="lay">                          
                        <td> <button class="btn"  type="button" onClick={() => setreposOfUser("col-12")}>Line-by-line</button> </td>     
                        <td> <button class="btn"  type="button" onClick={() => setreposOfUser("col-6")}>Table</button>  </td>                                             
                    </div>
                </table>
            </div>
        </div>
    )
}

export default Repos;