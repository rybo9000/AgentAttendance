import React from 'react';

import landingLogo from '../img/landingLogo.png';

import './SignUp.css';

class SignUp extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            username: '',
            password: '',
            marketcenter: ''
        }
    }

    updateInput = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('name is ', this.state.name);
        console.log('username is', this.state.username);
        console.log('password is ', this.state.password);
        console.log('marketcenter is ', this.state.marketcenter);
    }

    render() {
        return (
            <div className='signupBody'>
        <img src={landingLogo} alt='Agent Attendance Logo'/>    
        <div className='signupContainer'>    
                <form className='signupForm'>
                    <p><label htmlFor='name' className='signupLabel'>Name</label></p>
                    <p><input type='text' id='name' name='name' className='signupControl' onChange={e => this.updateInput(e.target.name, e.target.value)} /></p>
                    <p><label htmlFor='username' className='signupLabel'>Username</label></p>
                    <p><input type='text' id='username' name='username' className='signupControl' onChange={e => this.updateInput(e.target.name, e.target.value)} /></p>
                    <p><label htmlFor='password' className='signupLabel'>Password</label></p>
                    <p><input type='password' id='password' name='password' className='signupControl' onChange={e => this.updateInput(e.target.name, e.target.value)} /></p>
                    <p><label htmlFor='marketcenter' className='signupLabel'>Market Center</label></p>
                    <p><input type='text' id='marketcenter' name='marketcenter' className='signupControl'  onChange={e => this.updateInput(e.target.name, e.target.value)} /></p>
                    <p><button type='submit' className='signupLoginButton' disabled={!(this.state.name && this.state.username && this.state.password && this.state.marketcenter)} onClick={e => this.onSubmit(e)}>Submit</button></p>
                </form>

        </div>
            </div>
        )
    }
}

export default SignUp;