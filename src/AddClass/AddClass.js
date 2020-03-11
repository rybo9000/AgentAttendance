import React from 'react';

import '../config/style.css';
import './AddClass.css';

class AddClass extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            classname: ''
        }
    }

    updateInput = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.classname);

    }
    
    render() {
        
        return (
            <section className='half'>
                <div className='halfTop redBackground'>
                    Add A Class
                </div>
                <div className='halfBody'>
                    <form className='halfForm'>
                        <label htmlFor='classname' className='halfFormLabel'>Class Name</label>
                        <input type='text' className='halfFormInput' id='classname' name='classname' onChange={e => this.updateInput(e.target.name, e.target.value)}/>
                        <button type='submit' className='halfFormButton' disabled={!this.state.classname} onClick={e => this.handleSubmit(e)}>Submit</button>
                    </form>
                </div>
                <div className='halfBottom redBackground'></div>
            </section>
        )
    }
}

export default AddClass;