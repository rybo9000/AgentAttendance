import React from 'react';

import landingLogo from '../img/landingLogo.png';

import './Login.css';
import config from '../config/config.js';

class Login extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            username:'',
            password:'',
            marketcenter: null,
            mclist: [],
            error: null
        }

    }

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    
    submitHandler = (e) => {
        e.preventDefault();
        
        const { username, password, mcid } = this.state;

        const signupData = {
            username,
            password,
            mcid
        }
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData)
        }
        
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/signin`, options)
            .then(response => response.json())
            .then(response => {
                    
                    let token = response;

                    if (typeof(token) === 'string') {
                        window.localStorage.setItem('aatoken', token)
                        this.props.history.push('/main')
                    }

                    else {
                        this.setState({
                            username:'',
                            password:'',
                            marketcenter: null, 
                            error: response.error
                        })
                    }
                    

            })

            
 

 
    }

    componentDidMount() {
        
        localStorage.removeItem("aatoken");
        
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/signin/classes`)
        .then (response => response.json())
        .then (response => {
            
            const marketcenterlist = response.map(marketcenter => {
            return <option value={marketcenter.id} key={marketcenter.id} >{marketcenter.mcname}</option>
            })

            this.setState({
                mclist: marketcenterlist
            })

        })
    }
    
    render() {
        
        const displayError = (!this.state.error)
            ? ''
            : <div className='errorDiv'>{this.state.error}</div>
        
        return (
            <div className='loginBody'>
                <div className='loginWrapper'>
                    <img src={landingLogo} alt='Agent Attendance Logo' />
                    {displayError}
                    <div className='loginContainer'>
                        <form className='loginForm'>
                            <div>
                                <label htmlFor='username' className='loginLabel'>Username</label>
                                <input type='text' id='username' name='username' className='loginControl' value={this.state.username} onChange={e => this.handleChange(e.target.name, e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor='password' className='loginLabel'>Password</label>
                                <input type='password' id='password' name='password' className='loginControl' value={this.state.password} onChange={e => this.handleChange(e.target.name, e.target.value)}/>
                            </div>
                            <div>
                            <label htmlFor='mcid' className='loginLabel'>Market Center</label>
                            <select id='mcid' name='mcid' className='loginControl' value={this.state.mcid} onChange={e => this.handleChange(e.target.name, e.target.value)}>
                                <option value={null}>Select Your Market Center</option>
                                {this.state.mclist}
                            </select>
                            </div>
                            <button type='submit' className='loginButton' disabled={!(this.state.username && this.state.password && this.state.mcid)} onClick={e => this.submitHandler(e)}>Login</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;