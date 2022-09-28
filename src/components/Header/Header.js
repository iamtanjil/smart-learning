import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div className="header-container">
                <img src={logo} alt="" />
                <h3>Smart Learning</h3>
                </div>
            </nav>
        </div>
    );
};

export default Header;