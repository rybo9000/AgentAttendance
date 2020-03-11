import React from 'react';

import Class from '../Class/Class';

import '../config/style.css';
import './TakeAttendance.css';

class TakeAttendance extends React.Component {
    
    constructor(props) {
        super(props)

        const mcclasses = [
            'Orientation',
            'Realty 101',
            'Buying & Selling',
            'Close The Deal',
            'Financing 101'
        ];
        
        this.state = {
            classes: mcclasses
        }
    }
    
    render() {
    
        const classes = this.state.classes.map((theClass, index) => {
            
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
}

export default TakeAttendance;

