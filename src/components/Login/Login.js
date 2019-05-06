import React, {useState} from 'react';
import {loginUser} from '../../services/user';
import './Login.scss';

const Login = (props) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (e) => {
        e.preventDefault();
        loginUser({
            name: name,
            password: password
        })
        .then(res => {
            props.history.push('/projects')
        })
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
                <input required type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <input required type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Login;