import React from 'react';

import landingLogo from '../img/landingLogo.png';

import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className='loginBody'>
                <div className='loginWrapper'>
                    <img src={landingLogo} alt='Agent Attendance Logo' />
                    <div className='loginContainer'>
                        <form className='loginForm'>
                            <div>
                                <label for='username' className='loginLabel'>Username</label>
                                <input type='text' id='username' name='username' className='loginControl' />
                            </div>
                            <div>
                                <label for='password' className='loginLabel'>Password</label>
                                <input type='text' id='password' name='password' className='loginControl' />
                            </div>
                            <div>
                            <label for='marketcenter' className='loginLabel'>Market Center</label>
                            <select id='marketcenter' name='marketcenter' className='loginControl'>
                                <option value='none'>Select Your Market Center</option>
                            </select>
                            </div>
                            <button type='submit' className='loginButton' onclick="window.location.href = 'main.html';">Login</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;