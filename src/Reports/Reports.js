import React from 'react';
import JWT from 'jsonwebtoken';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ReportSelector from '../ReportSelector/ReportSelector';
import ReportOptionsByClass from '../ReportOptionsByClass/ReportOptionsByClass';
import ByClassReport from '../ByClassReport/ByClassReport';

import config from '../config/config.js';
import '../config/style.css';
import './Reports.css';

class Reports extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            reportSelect: null,
            selectedClass: null,
            classList: []
        }
    }

    handleUpdate = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    
    componentDidMount() {
        
        const token = localStorage.getItem('aatoken')
        const decodedJWT = JWT.verify(token, config.REACT_APP_JWT_SECRET)
        
        const options = {
            headers: {
                "mcid": decodedJWT.mcid
            }
        }
        
        // FETCH CLASSES AND SET STATE
        fetch('http://localhost:8000/api/mc/classes', options)
            .then(response => response.json())
            .then(classList => this.setState({
                classList
            }))
    }
    
    render() {
        
        const options = this.state.reportSelect === 'byclass'
            ? <ReportOptionsByClass selectedClass={this.state.selectedClass} handleUpdate={this.handleUpdate} classList={this.state.classList} />
            : ''

        const report = this.state.selectedClass !== null
            ? <ByClassReport />
            : ''

        return (
            <>
                <Header />
                <main className='full siteContent'>
                    <div className='container reportContainer'>
                        <ReportSelector handleUpdate={this.handleUpdate} reportSelect={this.state.reportSelect} />
                        {options}
                        {report}                 
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}

export default Reports;