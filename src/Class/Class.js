import React from 'react';
import { Link } from 'react-router-dom';

import go from '../img/go.png';

import '../Main/Main.css';
import './Class.css';

function Class(props) {
    
    const theClass = `thing ${props.bgColor}`;
    
    return (
        <div className={theClass}>
        <span className='thingName'><Link to='/checkin'>{props.theClassName}</Link></span>
        <Link to='/checkin'><img src={go} alt='' /></Link>
        </div> 
    )
}

export default Class;