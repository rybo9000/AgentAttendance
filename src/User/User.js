import React from 'react';
import { Link } from 'react-router-dom';

import go from '../img/go.png';

import '../config/style.css';
import './User.css';

function User(props) {
    
    const theClass = `thing ${props.bgColor}`;
    
    return (
        <div className={theClass}>
        <span className='thingName'><Link to='/checkin'>{props.user}</Link></span>
        <Link to='/edituser'><img src={go} alt='' /></Link>
        </div> 
    )
}

export default User;