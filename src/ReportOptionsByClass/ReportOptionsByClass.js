import React from 'react';

import '../config/style.css';
import './ReportOptionsByClass.css';

function ReportOptionsByClass(props) {
    
    const classList = props.classList.map((cls) => {
        return <option value={cls.id} key={cls.id}>{cls.classname}</option>
    })

    return (
        <div className='reportOptionsSelector'>
            <select value={props.selectedClass} onChange={e => props.handleUpdate(e.target.name, e.target.value)} name='selectedClass' id='selectedClass'>
                <option value='null'>Select A Class</option>
                {classList}
            </select>
        </div>
    )
}

export default ReportOptionsByClass;