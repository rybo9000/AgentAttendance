import React from 'react';
import { Link } from 'react-router-dom';

import '../Main/Main.css';
import './Nav.css';

function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li><Link to='/main'>HOME</Link></li>
                <li><Link to='/users'>USERS</Link></li>
                <li><Link to='/classes'>CLASSES</Link></li>
                <li><Link to='/reports'>REPORTS</Link></li>
                <li>LOGOUT</li>
            </ul>
        </nav>
    )
}

export default Nav;