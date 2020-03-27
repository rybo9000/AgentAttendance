import React from 'react';
import JWT from 'jsonwebtoken';

import config from '../config/config.js';
import './CheckIn.css';

class CheckIn extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    updateInput = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const token = localStorage.getItem('aatoken')
        const decodedJWT = JWT.verify(token, config.REACT_APP_JWT_SECRET)

        const mcid = decodedJWT.mcid;
        
        const { username, password } = this.state;

        const classid = this.props.match.params.id;
        
        const checkInData = { username, password, mcid, classid };
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(checkInData)
        }
        
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/checkin`, options)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    username: '',
                    password: ''
                })
            })
            .catch(response => console.log(response))
            
    }
    
    render() {
        return (
            <div className='checkinBody'>
                <div className='checkinWrapper'>
                    <div className='checkinContainer'>
                        <div className='checkinForm'>
                            <form className='checkinForm' onSubmit={e => this.onSubmit(e)}>
                                <span className='checkingInto'>You Are Checking Into</span>
                                <span className='theClassName'>Orientation 101</span>
                                <div>
                                    <label htmlFor='username' className='checkinLabel'>Username</label>
                                    <input type='text' id='username' name='username' className='checkinControl' value={this.state.username} onChange={e => this.updateInput(e.target.name, e.target.value)} />
                                </div>
                                <div>
                                <label htmlFor='password' className='checkinLabel'>Password</label>
                                <input type='password' id='password' name='password' className='checkinControl' value={this.state.password} onChange={e => this.updateInput(e.target.name, e.target.value)} />
                                </div>
                                <button type='submit' className='checkinButton' disabled={!(this.state.username && this.state.password)} >Check In</button>
                            </form>
                        </div>
                    </div>
                </div>
                <span className='checkInLogout'><a href='/login'>LOGOUT</a></span>
            </div>
        )
    }
}

export default CheckIn;