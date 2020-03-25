import React from 'react';

import '../config/style.css';
import './AddClass.css';

function AddClass(props) {
    
 
        
        return (
            <section className='half'>
                <div className='halfTop redBackground'>
                    Add A Class
                </div>
                <div className='halfBody'>
                    <form className='halfForm' onSubmit={e => props.handleSubmit(e)}>
                        <label htmlFor='classInput' className='halfFormLabel'>Class Name</label>
                        <input type='text' className='halfFormInput' id='classInput' name='classInput' onChange={e => props.updateInput(e.target.name, e.target.value)} value={props.classInput} />
                        <button type='submit' className='halfFormButton' disabled={!props.classInput} >Submit</button>
                    </form>
                </div>
                <div className='halfBottom redBackground'></div>
            </section>
        )
}

export default AddClass;