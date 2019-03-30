import React, { Component } from 'react'
import fakeAuth from './fakeAuth';
import {Redirect} from 'react-router-dom'
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            redirectToReferrer:false
        }
    }
    login = ()=>{
        fakeAuth.authenticate(()=>{
            this.setState({
                redirectToReferrer:true
            })
        });
    }
    render() {
        if(this.state.redirectToReferrer){
            return <Redirect to="/protected"/>
        }
        return (
            <div>
                <p>You must log in to view the page at</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

