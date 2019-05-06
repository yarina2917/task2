import React from 'react';
import './Header.scss'

const Header = ({props}) => {
    const logoutHandler = () => {
        localStorage.removeItem('user');
    };
    return (
        <header>
            <ul className="nav">
                <li onClick={() => logoutHandler()}>Logout</li>
            </ul>
        </header>
    )
};

export default Header;