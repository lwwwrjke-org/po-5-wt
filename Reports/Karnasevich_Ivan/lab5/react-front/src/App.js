import React from "react";
import {Redirect, Route, withRouter} from "react-router";
import UserContainer from "./components/user/UserContainer";
import {BrowserRouter} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <Route exact path={'/:username'} render={withRouter(UserContainer)}/>
            <Route exact path={'/'} render={() => <Redirect to={'/Ivan091'}/>}/>
        </BrowserRouter>
    )
}

export default App