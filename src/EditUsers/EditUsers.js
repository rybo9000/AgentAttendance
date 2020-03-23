import React from 'react';

import User from '../User/User';

import config from '../config/config.js';
import '../config/style.css';
import './EditUsers.css';

function EditUsers(props) {
        
            
            const users = props.users.map((user, index) => {
            
                const bgColor = index % 2 === 0
                    ? 'whiteBackground'
                    : 'lightGrayBackground';
                
                return <User firstname={user.firstname} lastname ={user.lastname} id={user.id} key={index} bgColor={bgColor} />
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

export default EditUsers;

