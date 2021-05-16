import Profile from "./components/Profile"
import Search from "./components/Search"
import Repos from "./components/Repos"
import {useState} from "react"

const App = () => {
  const [dataUser, setdataUser] = useState({});
  const [repositoriu, setrepositoriu] = useState([{}]);
  const [viewElement, setViewElement] = useState(false);

  const funcSearchUser = (username) => {
      fetch(`https://api.github.com/users/${username}`)
          .then(reaction => reaction.json())
          .then(data => {
              setdataUser(data)
              setViewElement(true)
          })
      fetch(`https://api.github.com/users/${username}/repos`)
          .then(reaction => reaction.json())
          .then(data => {
              setrepositoriu(data)
          }
      )
  }

  return (
      <div className="container justify-content-center">
              <Search search={funcSearchUser} />
          <p></p>
          <div className="row">
              <div className="col-4">
                  {viewElement && <Profile dataUser={dataUser} viewElement={viewElement}/>}
              </div>
              <div className="col-8">
                  {viewElement && <Repos dataUser={dataUser} repositoriu={repositoriu} />}
              </div>
          </div>
      </div>
  )
}
export default App; 