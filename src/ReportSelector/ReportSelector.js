import React from 'react';

import '../config/style.css';
import './ReportSelector.css';

function ReportSelector(props) {
    return (
        <div class='reportSelector'>
            <form>
                <label for='reportSelect'>Select A Report:</label>
                <select onChange = {e => props.handleUpdate(e.target.name, e.target.value)} value={props.reportSelect} id='reportSelect' name='reportSelect' >
                    <option value='null'>Select A Report</option>
                    <option value='byclass'>Attendance By Class</option>
                </select>
            </form>
        </div>
    )
}

export default ReportSelector;