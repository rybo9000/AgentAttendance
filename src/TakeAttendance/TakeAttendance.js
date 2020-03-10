import React from 'react';

import Class from '../Class/Class';

import '../Main/Main.css';
import './TakeAttendance.css';

function TakeAttendance(props) {
    
    const classes = props.classes.map((theClass, index) => {
        
        const bgColor = index % 2 === 0
            ? 'whiteBackground'
            : 'lightGrayBackground'
        
        return <Class theClassName={theClass} key={index} bgColor={bgColor}/>
    })
    
    return (
        <section className='half'>
            <div className='halfTop darkBackground twoRem'>
                Take Attendance
            </div>
            {classes}
            <div className='halfBottom darkBackground'></div>
        </section>
    )
}

export default TakeAttendance;

