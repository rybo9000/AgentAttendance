import React from 'react';

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
        console.log('username is ', this.state.username);
        console.log('password is ', this.state.password);
    }
    
    render() {
        return (
            <div className='checkinBody'>
                <div className='checkinWrapper'>
                    <div className='checkinContainer'>
                        <div className='checkinForm'>
                            <form className='checkinForm'>
                                <span className='checkingInto'>You Are Checking Into</span>
                                <span className='theClassName'>Orientation 101</span>
                                <div>
                                    <label htmlFor='username' className='checkinLabel'>Username</label>
                                    <input type='text' id='username' name='username' className='checkinControl' onChange={e => this.updateInput(e.target.name, e.target.value)} />
                                </div>
                                <div>
                                <label htmlFor='password' className='checkinLabel'>Password</label>
                                <input type='password' id='password' name='password' className='checkinControl' onChange={e => this.updateInput(e.target.name, e.target.value)} />
                                </div>
                                <button type='submit' className='checkinButton' disabled={!(this.state.username && this.state.password)} onClick={e => this.onSubmit(e)}>Check In</button>
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