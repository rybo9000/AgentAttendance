import React from 'react';

import '../config/style.css';
import './AddUser.css';

class AddUser extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            username: ''
        }
    }
    
    updateInput = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        
        e.preventDefault();
        console.log('name is ', this.state.name);
        console.log('username is', this.state.username);
    }
    
    render() {
        return (
            <section className='half'>
                <div className='halfTop redBackground'>
                    Add A User
                </div>
                <div className='halfBody'>
                    <form className='halfForm'>
                        <label htmlFor='name' className='halfFormLabel'>Name</label>
                        <input type='text' className='halfFormInput' id='name'  name='name' onChange={e => this.updateInput(e.target.name, e.target.value)} value={this.state.name} />
                        <label htmlFor='username' className='halfFormLabel'>Username</label>
                        <input type='text' className='halfFormInput' id='username' name='username' onChange={e => this.updateInput(e.target.name, e.target.value)} value={this.state.username}/>
                        <button type='submit' className='halfFormButton' disabled={!(this.state.name && this.state.username)} onClick={e => this.handleSubmit(e)}>Submit</button>
                    </form>
                </div>
                <div className='halfBottom redBackground'></div>
            </section>
        )
    }
}

export default AddUser;