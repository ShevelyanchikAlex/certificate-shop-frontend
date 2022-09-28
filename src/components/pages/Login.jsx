import React from 'react';
import {Link} from "react-router-dom";
import '../../assets/styles/Login.css';

const Login = () => {
    return (
        <div className={'login-container'}>
            <h1>Login</h1>
            <form method="post">
                <div className={'txt-field'}>
                    <input type={"text"} required={true}/>
                    <label>Username</label>
                </div>
                <div className={'txt-field'}>
                    <input type={"password"} required={true}/>
                    <label>Password</label>
                </div>
                <input type={"submit"} value={'Login'}/>
                <div className={'signup-link'}>
                    Not a member? <Link to={'/register'}>Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;