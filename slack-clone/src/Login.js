import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import "./Login.css"
import logo from "./logo.png";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {

    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src={logo}
                    alt=""
                />
                <h1>Sign in to React HQ</h1>
                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login;
