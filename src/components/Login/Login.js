import React, {useState} from 'react';
import {loginUser} from '../../services/user';
import './Login.scss';

const Login = (props) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (e) => {
        e.preventDefault();
        const data = {
            username: name,
            password: password
        };
        loginUser(data)
        .then(res => {
            console.log(res);
            props.history.push('/projects');
            localStorage.setItem('user', JSON.stringify(data))
        }, err => {
            props.history.push('/projects');
            console.log(err)
        })
    };

    const checkValidity = () => {
        return !(name.trim() && password.trim());
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
                <input required type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <input required type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button disabled={checkValidity()}>Submit</button>
            </form>
        </div>
    )
};

export default Login;