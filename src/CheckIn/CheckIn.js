import React from 'react';
import JWT from 'jsonwebtoken';

import config from '../config/config.js';
import './CheckIn.css';

class CheckIn extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            notification: '',
            classname: ''
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

                console.log(response)
                
                if (response.notification.length) {
                    this.setState({
                        notification: response.notification,
                        username: '',
                        password: ''
                    })
                } else {
                
                    this.setState({
                        username: '',
                        password: '',
                        notification: 'User Successfully Checked In'
                    })
                }
            })
            .catch(response => console.log(response))
            
    }
    
    componentDidMount() {
        
        const token = localStorage.getItem('aatoken')
        
        if (!token) {
            this.props.history.push('/login')
        }
        
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/mc/class?classid=${this.props.match.params.id}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    classname: response[0].classname
                })
            })
    }
    
    render() {
        
        const notification = this.state.notification
            ? <div className='notification'>{this.state.notification}</div>
            : ''
        
        return (
            <div className='checkinBody'>
                <div className='checkinWrapper'>
                    <div className='checkinContainer'>
                        <div className='checkinForm'>
                            <form className='checkinForm' onSubmit={e => this.onSubmit(e)}>
                                <span className='checkingInto'>You Are Checking Into</span>
                                <span className='theClassName'>{this.state.classname}</span>
                                {notification}
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