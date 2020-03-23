import React from 'react';

import config from '../config/config.js';
import '../config/style.css';
import './AddUser.css';

class AddUser extends React.Component {
    



    
    render() {
        return (
            <section className='half'>
                <div className='halfTop redBackground'>
                    Add A User
                </div>
                <div className='halfBody'>
                    <form className='halfForm' onSubmit={e => this.props.handleSubmit(e)}>
                        <label htmlFor='firstname' className='halfFormLabel'>First Name</label>
                        <input type='text' className='halfFormInput' id='firstname'  name='firstname' onChange={e => this.props.updateInput(e.target.name, e.target.value)} value={this.props.firstname} />
                        <label htmlFor='name' className='halfFormLabel'>Last Name</label>
                        <input type='text' className='halfFormInput' id='lastname'  name='lastname' onChange={e => this.props.updateInput(e.target.name, e.target.value)} value={this.props.lastname} />
                        <label htmlFor='username' className='halfFormLabel'>Username</label>
                        <input type='text' className='halfFormInput' id='username' name='username' onChange={e => this.props.updateInput(e.target.name, e.target.value)} value={this.props.username}/>
                        <label htmlFor='password' className='halfFormLabel'>Password</label>
                        <input type='password' className='halfFormInput' id='password' name='password' onChange={e => this.props.updateInput(e.target.name, e.target.value)} value={this.props.password}/>
                        <label htmlFor='email' className='halfFormLabel'>E-Mail Address</label>
                        <input type='email' className='halfFormInput' id='email' name='email' onChange={e => this.props.updateInput(e.target.name, e.target.value)} value={this.props.email}/>

                        <button type='submit' className='halfFormButton' disabled={!(this.props.firstname && this.props.lastname && this.props.username && this.props.password && this.props.email)} >Submit</button>
                    </form>
                </div>
                <div className='halfBottom redBackground'></div>
            </section>
        )
    }
}

export default AddUser;