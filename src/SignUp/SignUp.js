import React from 'react';

import landingLogo from '../img/landingLogo.png';

import './SignUp.css';
import config from '../config/config.js';

class SignUp extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            mcname: '',
            kwid: ''
        }
    }

    updateInput = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const { firstname, lastname, username, password, mcname, kwid, email } = this.state;

        const signupData = {
            firstname,
            lastname,
            username,
            password,
            mcname,
            kwid,
            email
        }
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData)
        }
        
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/signup/marketcenter`, options)
            .then(response => response.json())
            .then(response => {
                window.localStorage.setItem('aatoken', response)
            })

        this.props.history.push('/main')
    }

    render() {
        return (
            <div className='signupBody'>
        <img src={landingLogo} alt='Agent Attendance Logo'/>    
        <div className='signupContainer'>    
                <form className='signupForm' onSubmit={e => this.onSubmit(e)}>
                    <p><label htmlFor='firstname' className='signupLabel'>First Name</label></p>
                    <p><input type='text' id='firstname' name='firstname' className='signupControl' onChange={e => this.updateInput(e.target.name, e.target.value)} required /></p>
                    <p><label htmlFor='lastname' className='signupLabel'>Last Name</label></p>
                    <p><input type='text' id='lastname' name='lastname' className='signupControl' onChange={e => this.updateInput(e.target.name, e.target.value)} required /></p>
                    <p><label htmlFor='username' className='signupLabel'>Username</label></p>
                    <p><input type='text' id='username' name='username' className='signupControl' onChange={e => this.updateInput(e.target.name, e.target.value)} required /></p>
                    <p><label htmlFor='password' className='signupLabel'>Password</label></p>
                    <p><input type='password' id='password' name='password' className='signupControl' onChange={e => this.updateInput(e.target.name, e.target.value)} required /></p>
                    <p><label htmlFor='email' className='signupLabel'>E-Mail Address</label></p>
                    <p><input type='email' id='email' name='email' className='signupControl' onChange={e => this.updateInput(e.target.name, e.target.value)} required /></p>
                    <p><label htmlFor='mcname' className='signupLabel'>Market Center Name</label></p>
                    <p><input type='text' id='mcname' name='mcname' className='signupControl'  onChange={e => this.updateInput(e.target.name, e.target.value)} required /></p>
                    <p><label htmlFor='kwid' className='signupLabel'>Market Center ID</label></p>
                    <p><input type='text' id='kwid' name='kwid' className='signupControl'  onChange={e => this.updateInput(e.target.name, e.target.value)} required /></p>
                    <p><button type='submit' className='signupLoginButton' disabled={!(this.state.firstname && this.state.lastname && this.state.username && this.state.password && this.state.mcname && this.state.kwid)} >Submit</button></p>
                </form>

        </div>
            </div>
        )
    }
}

export default SignUp;