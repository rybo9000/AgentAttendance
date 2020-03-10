import React from 'react';

import landingLogo from '../img/landingLogo.png';

import './SignUp.css';

class SignUp extends React.Component {
    render() {
        return (
            <div className='signupBody'>
        <img src={landingLogo} alt='Agent Attendance Logo'/>    
        <div className='signupContainer'>    
                <form className='signupForm'>
                    <p><label for='name' className='signupLabel'>Name</label></p>
                    <p><input type='text' id='name' className='signupControl' /></p>
                    <p><label for='username' className='signupLabel'>Username</label></p>
                    <p><input type='text' id='username' className='signupControl' /></p>
                    <p><label for='password' className='signupLabel'>Password</label></p>
                    <p><input type='password' id='password' className='signupControl' /></p>
                    <p><label for='marketcenter' className='signupLabel'>Market Center</label></p>
                    <p><input type='text' id='marketcenter' className='signupControl' /></p>
                    <p><button type='submit' className='signupLoginButton'>Submit</button></p>
                </form>

        </div>
            </div>
        )
    }
}

export default SignUp;