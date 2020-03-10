import React from 'react';

import '../Main/Main.css';
import './AddClass.css';

function AddClass() {
    return (
        <section className='half'>
            <div className='halfTop redBackground'>
                Add A Class
            </div>
            <div className='halfBody'>
                <form className='halfForm'>
                    <label for='name' className='halfFormLabel'>Class Name</label>
                    <input type='text' className='halfFormInput' id='name' />
                    <button type='submit' className='halfFormButton'>Submit</button>
                </form>
            </div>
            <div class='halfBottom redBackground'></div>
        </section>
    )
}

export default AddClass;