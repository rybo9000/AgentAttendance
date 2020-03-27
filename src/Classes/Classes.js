import React from 'react';
import JWT from 'jsonwebtoken';

import Header from '../Header/Header';
import EditClasses from '../EditClasses/EditClasses';
import AddClass from '../AddClass/AddClass';
import Footer from '../Footer/Footer';

import config from '../config/config.js';
import '../config/style.css';
import './Classes.css';

class Classes extends React.Component {
    
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
            classname: mcclasses,
            classInput: ''
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
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/mc/classes`, options)
            .then(response => response.json())
            .then(classname => this.setState({
                classname
            }))
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
        
        const classname = this.state.classInput;

        const newClass = { classname, mcid }
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newClass)
        }

        fetch(`${config.REACT_APP_API_ENDPOINT}/api/mc/classes`, options)
            .then(response => response.json())
            .then(response => {
                
                this.setState({
                    classInput: '',
                    classname: [{classname: response.classname, id: response.id}, ...this.state.classname]
                })
            })



    }
    
    render() { 
        
        return (
            <>
                <Header />
                <main className='full siteContent'>
                    <div className='container'>
                        <EditClasses classList={this.state.classname} />
                        <AddClass updateInput={this.updateInput} handleSubmit={this.handleSubmit} classInput={this.state.classInput }/>
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}

export default Classes;