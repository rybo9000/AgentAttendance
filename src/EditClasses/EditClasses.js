import React from 'react';

import Class from '../Class/Class';

import '../config/style.css';
import './EditClasses.css';

class EditClasses extends React.Component {
    
    constructor(props) {
        super(props)

        const classes = [
            'Orientation',
            'Buying & Selling',
            'Financing 101',
            'Rentals as Income'
        ]
        
        this.state = {
            classes: classes
        }
    }
    
    render() {
        
        const classes = this.state.classes.map((theClassName, index) => {
            
            const bgColor = index % 2 === 0
            ? 'whiteBackground'
            : 'lightGrayBackground';
            
            return <Class theClassName={theClassName} key={index} bgColor={bgColor} />
        })
        
        return (
            <section className='half'>
                <div className='halfTop darkBackground twoRem'>
                    Edit Classes
                </div>
                {classes}
                <div className='halfBottom darkBackground'></div>
            </section>
        )
    }
}

export default EditClasses;

