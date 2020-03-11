import React from 'react';

import landingLogo from '../img/landingLogo.png';

import './Login.css';

class Login extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            username:'',
            password:'',
            marketcenter: null
        }

    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log('username is ', this.state.username);
        console.log('pasword is ', this.state.password);
        console.log('marketcenter is ', this.state.marketcenter);
    }

    render() {
        return (
            <div className='loginBody'>
                <div className='loginWrapper'>
                    <img src={landingLogo} alt='Agent Attendance Logo' />
                    <div className='loginContainer'>
                        <form className='loginForm'>
                            <div>
                                <label htmlFor='username' className='loginLabel'>Username</label>
                                <input type='text' id='username' name='username' className='loginControl' onChange={e => this.handleChange(e.target.name, e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor='password' className='loginLabel'>Password</label>
                                <input type='text' id='password' name='password' className='loginControl' onChange={e => this.handleChange(e.target.name, e.target.value)}/>
                            </div>
                            <div>
                            <label htmlFor='marketcenter' className='loginLabel'>Market Center</label>
                            <select id='marketcenter' name='marketcenter' className='loginControl' onChange={e => this.handleChange(e.target.name, e.target.value)}>
                                <option value={null}>Select Your Market Center</option>
                                <option value='kwswmc'>Test Market Center</option>
                            </select>
                            </div>
                            <button type='submit' className='loginButton' disabled={!(this.state.username && this.state.password && this.state.marketcenter)} onClick={e => this.submitHandler(e)}>Login</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;