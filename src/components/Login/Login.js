import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../services/user';
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
            localStorage.setItem('user', JSON.stringify(data));
            props.history.push('/projects');
            console.log(res);
        }, err => {
            localStorage.setItem('user', JSON.stringify(data));
            props.history.push('/projects');
            console.log(err)
        })
    };

    const checkValidity = () => {
        return !(name.trim() && password.trim());
    };

    return (
        <div className="login">
            { !!localStorage.getItem('user')  && <Redirect to='/projects'/> }
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