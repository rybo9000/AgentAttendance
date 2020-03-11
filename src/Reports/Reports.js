import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ReportSelector from '../ReportSelector/ReportSelector';

import '../config/style.css';
import './Reports.css';

class Reports extends React.Component {
    render() {
        return (
            <>
                <Header />
                <main className='full siteContent'>
                    <div className='container'>
                        <ReportSelector />
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}

export default Reports;