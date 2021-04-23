import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../FireBase/ConfigFile/Firebase.config';
import { actionTypes } from '../StateProvider/Reducer/reducer';
import { useStateValue } from '../StateProvider/StateProvider';
import './Login.css';

const Login = () => {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <div className="login_container">
                <img src="https://i.ibb.co/h7v8RD1/whatsapp-logo-light-green-png-0.png" style={{ height: "100px" }} />
                <div className="login_text">
                    <h1>😜 Your Personal Whats App 😜 </h1>
                </div>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    );
};

export default Login;