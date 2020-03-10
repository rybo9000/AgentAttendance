import React from 'react';
import { Link } from 'react-router-dom';
import './LandingNav.css';

function LandingNav() {
    return (
        <nav className='landingNav'>
        <ul>
            <li><Link to='/signup'>SIGN UP / FREE TRIAL</Link></li>
            <li><a href='#about'>ABOUT</a></li>
            <li><a href='#features'>FEATURES</a></li>
            <li><Link to='/login'>LOGIN</Link></li>
        </ul>
    </nav>
    )
}

export default LandingNav;