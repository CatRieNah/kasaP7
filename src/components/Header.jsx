import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo/logo-header.png"

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <Link to="/">Acceuil</Link>
                <Link to="/About">A propos</Link>
            </nav>
        </header>
    );
};

export default Header;