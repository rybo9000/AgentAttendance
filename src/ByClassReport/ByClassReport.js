import React from 'react';

import '../config/style.css';
import './ByClassReport.css';

class ByClassReport extends React.Component {
    

    
    render() {
        
        const rows = this.props.rows.map((row, index) =>
            <><tr key={index}><td>{row.firstname + ' ' + row.lastname}</td><td>COMPLETED</td><td>{row.completed}</td></tr></>
        )
        
        return (
            <table className='reportTable'>
                    <thead><tr><th>Name</th><th>Status</th><th>Date</th></tr></thead>
                    <tbody>
                        {rows}
                    </tbody>
                    
            </table>
        )
    }
}

export default ByClassReport;