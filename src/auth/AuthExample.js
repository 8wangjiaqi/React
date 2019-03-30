import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter,Redirect } from 'react-router-dom';
import AuthButton from './AuthButton';
import Public from './Public';
import Login from './Login';
import Protected from './Protected';
import fakeAuth from './fakeAuth';
function AuthExample() {
    return (
        <Router>
            <div>
                <AuthButton />
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <Route path="/public" component={Public}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </Router>
    )
}
function PrivateRoute(props){
    return (
        <Route path={props.path} render={()=>(
            fakeAuth.isAuthenticated?
            <props.component/>:
            <Redirect to="/login"/> 
     
        )}/>
    )
}
export default AuthExample;
