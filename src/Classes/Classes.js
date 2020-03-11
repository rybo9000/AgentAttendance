import React from 'react';

import Header from '../Header/Header';
import EditClasses from '../EditClasses/EditClasses';
import AddClass from '../AddClass/AddClass';
import Footer from '../Footer/Footer';

import '../config/style.css';
import './Classes.css';

class Classes extends React.Component {
    render() {
        
        return (
            <>
                <Header />
                <main className='full siteContent'>
                    <div className='container'>
                        <EditClasses />
                        <AddClass />
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}

export default Classes;