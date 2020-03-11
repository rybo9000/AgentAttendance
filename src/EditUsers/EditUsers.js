import React from 'react';

import User from '../User/User';

import '../config/style.css';
import './EditUsers.css';

class EditUsers extends React.Component {
        
    constructor(props) {
        super(props)

        const users = [
            'John Riley',
            'Bill Wellington',
            'Tim Baker',
            'Marcia Smith',
            'John Hughes'
        ]

        this.state = {
            users: users
        }
    }
        
    render() {
            
            const users = this.state.users.map((user, index) => {
            
                const bgColor = index % 2 === 0
                    ? 'whiteBackground'
                    : 'lightGrayBackground';
                
                return <User user={user} key={index} bgColor={bgColor} />
            })
            
            return (
                <section className='half'>
                    <div className='halfTop darkBackground twoRem'>
                        Edit Users
                    </div>
                    {users}
                    <div className='halfBottom darkBackground'></div>
                </section>
            )
        }

}

export default EditUsers;

