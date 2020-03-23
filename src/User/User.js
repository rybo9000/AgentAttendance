import React from 'react';
import { Link } from 'react-router-dom';

import go from '../img/go.png';

import '../config/style.css';
import './User.css';

function User(props) {
    
    const theClass = `thing ${props.bgColor}`;
    
    const link = `/edituser/${props.id}`;
    
    return (
        <div className={theClass}>
        <span className='thingName'><Link to='/checkin'>{`${props.firstname} ${props.lastname}`}</Link></span>
        <Link to={link}><img src={go} alt='' /></Link>
        </div> 
    )
}

export default User;