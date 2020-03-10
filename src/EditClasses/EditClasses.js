import React from 'react';

import go from '../img/go.png';

import '../Main/Main.css';
import './EditClasses.css';

function EditClasses() {
    return (
        <section className='half'>
            <div className='halfTop darkBackground twoRem'>
                Edit Classes
            </div>
            <div className='thing whiteBackground'>
                <span className='thingName'>Orientation</span>
                <img src={go} alt='' />
            </div>
            <div className='thing lightGrayBackground'>
                <span className='thingName'>Basics 101</span>
                <img src={go} alt='' />
            </div>
            <div className='thing whiteBackground'>
                <span className='thingName'>Advanced Calculus</span>
                <img src={go} alt='' />
            </div>
            <div className='thing lightGrayBackground'>
                <span className='thingName'>Geography</span>
                <img src={go} alt='' />
            </div>
            <div className='halfBottom darkBackground'></div>
        </section>
    )
}

export default EditClasses;

