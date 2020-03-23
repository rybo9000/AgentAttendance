import React from 'react';
import JWT from 'jsonwebtoken';

import Class from '../Class/Class';

import config from '../config/config.js';
import '../config/style.css';
import './EditClasses.css';

class EditClasses extends React.Component {
    
    constructor(props) {
        super(props)

        const mcclasses = [
            {name: 'Orientation', id: 1},
            {name: 'Realty 101', id: 2},
            {name: 'Buying & Selling', id: 3},
            {name: 'Close The Deal', id: 4},
            {name: 'Financing 101', id: 5}
        ];
        
        this.state = {
            classname: mcclasses
        }
    }

    componentDidMount() {
        
        const token = localStorage.getItem('aatoken')
        const decodedJWT = JWT.verify(token, config.REACT_APP_JWT_SECRET)
        
        const options = {
            headers: {
                "mcid": decodedJWT.mcid
            }
        }
        
        // FETCH CLASSES AND SET STATE
        fetch('http://localhost:8000/api/mc/classes', options)
            .then(response => response.json())
            .then(classname => this.setState({
                classname
            }))
    }
    
    render() {
        
        const classes = this.state.classname.map((theClassName, index) => {
            
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

