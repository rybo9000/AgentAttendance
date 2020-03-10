import React from 'react';

import logoSmall from '../img/logoSmall.png';
import hamburgerWhite from '../img/hamburgerWhite.png';
import Nav from '../Nav/Nav';

import '../Main/Main.css';
import './Header.css';

class MainHeader extends React.Component {
    render() {
        return (
            <header className='full darkBackground headerMargin'>
            <div className='container'>
                <div className='headerContent'>
                    <img src={logoSmall} alt='Agent Attendance Logo' />
                    <span className='hamburger'><img src={hamburgerWhite} /></span>
                    <Nav />
                </div>
            </div>
        </header>
        )
    }
}

export default MainHeader;