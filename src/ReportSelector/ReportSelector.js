import React from 'react';

import '../config/style.css';
import './ReportSelector.css';

function ReportSelector() {
    return (
        <div class='reportSelector'>
            <form>
                <label for='reportSelect'>Select A Report:</label>
                <select>
                    <option>Select A Report</option>
                    <option>Attendance By Class</option>
                </select>
            </form>
        </div>
    )
}

export default ReportSelector;