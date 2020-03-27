import React from 'react';

import Class from '../Class/Class';

import '../config/style.css';
import './EditClasses.css';

class EditClasses extends React.Component {
    
    render() {
        
        const classes = this.props.classList.map((theClassName, index) => {
            
            const bgColor = index % 2 === 0
            ? 'whiteBackground'
            : 'lightGrayBackground';

            const link = `/editclass/${theClassName.id}`;
            
            return <Class theClassName={theClassName.classname} key={index} bgColor={bgColor} id={theClassName.id} link={link}/>
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

