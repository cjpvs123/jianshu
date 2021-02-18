import React from "react";
import {Route,Switch} from 'react-router-dom'
import Sign_in from "./sign_in";
import Sign_up from "./sign_up";


export default class Login extends React.Component{
    render() {
        return(
            <Switch>
                <Route path='/login/sign_in' component={Sign_in}/>
                <Route path='/login/sign_up' component={Sign_up}/>
            </Switch>
        )
    }
}
