import {useState} from "react"
import style from "./style.css"


const Search = ({search}) => {
    const [nameOfUser, setnameOfUser] = useState("");
    const onSubmit = async(event) => {
        event.preventDefault();
        if(nameOfUser) { 
            search(nameOfUser);
        }
    }


    return ( 
            <div class="title">
                <p><input class="btn" type="text" autoComplete="off" placeholder="Username"  onChange={(event) => setnameOfUser(event.target.value)}/></p>
                <p><button class="btn" onClick={onSubmit}>Search</button></p>
            </div>
    )
}

export default Search;  