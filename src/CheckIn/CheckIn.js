import React from 'react';

import './CheckIn.css';

class CheckIn extends React.Component {
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
                                    <label for='username' className='checkinLabel'>Username</label>
                                    <input type='text' id='username' className='checkinControl' />
                                </div>
                                <div>
                                <label for='password' className='checkinLabel'>Password</label>
                                <input type='password' id='password' className='checkinControl' />
                                </div>
                                <button type='submit' className='checkinButton'>Check In</button>
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