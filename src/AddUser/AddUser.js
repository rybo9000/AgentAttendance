import React from 'react';

import '../Main/Main.css';
import './AddUser.css';

function AddUser() {
    return (
        <section className='half'>
            <div className='halfTop redBackground'>
                Add A User
            </div>
            <div className='halfBody'>
                <form className='halfForm'>
                    <label for='name' className='halfFormLabel'>Name</label>
                    <input type='text' className='halfFormInput' id='name' />
                    <label for='username' className='halfFormLabel'>Username</label>
                    <input type='text' className='halfFormInput' id='username' />
                    <button type='submit' className='halfFormButton'>Submit</button>
                </form>
            </div>
            <div class='halfBottom redBackground'></div>
        </section>
    )
}

export default AddUser;