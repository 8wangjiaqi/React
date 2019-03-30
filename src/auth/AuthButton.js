import React from 'react';
import fakeAuth from './fakeAuth';
import {withRouter} from 'react-router-dom';
function Button(props){
    return (
        fakeAuth.isAuthenticated?
        <p>
            welcome!!!
            <button onClick={()=>{
                fakeAuth.signout(props.history.push('/'));
            }}>退出</button>
        </p>:
        <p>You are not logged in.</p>
    )
}
const AuthButton = withRouter(Button)
export default AuthButton;