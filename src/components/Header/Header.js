import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({history}) => {
    const logoutHandler = () => {
        localStorage.removeItem('user');
        history.push('/login')
    };
    return (
        <header>
            <ul className="nav">
                <li><Link to="/projects">Projects</Link></li>
                <li onClick={() => logoutHandler()}><span>Logout</span></li>
            </ul>
        </header>
    )
};

export default Header;