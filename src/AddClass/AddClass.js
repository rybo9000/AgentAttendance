import React from 'react';
import JWT from 'jsonwebtoken';

import config from '../config/config.js';
import '../config/style.css';
import './AddClass.css';

class AddClass extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            classname: ''
        }
    }

    updateInput = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        
        e.preventDefault();

        const token = localStorage.getItem('aatoken')
        const decodedJWT = JWT.verify(token, config.REACT_APP_JWT_SECRET)
        
        const mcid = decodedJWT.mcid;
        
        const { classname } = this.state

        const newClass = { classname, mcid }
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newClass)
        }

        fetch('http://localhost:8000/api/mc/classes', options)

        this.setState({
            classname: ''
        })

    }
    
    render() {
        
        return (
            <section className='half'>
                <div className='halfTop redBackground'>
                    Add A Class
                </div>
                <div className='halfBody'>
                    <form className='halfForm'>
                        <label htmlFor='classname' className='halfFormLabel'>Class Name</label>
                        <input type='text' className='halfFormInput' id='classname' name='classname' onChange={e => this.updateInput(e.target.name, e.target.value)}/>
                        <button type='submit' className='halfFormButton' disabled={!this.state.classname} onClick={e => this.handleSubmit(e)}>Submit</button>
                    </form>
                </div>
                <div className='halfBottom redBackground'></div>
            </section>
        )
    }
}

export default AddClass;