import React from 'react';

import Header from '../Header/Header';
import EditUsers from '../EditUsers/EditUsers';
import AddUser from '../AddUser/AddUser';
import Footer from '../Footer/Footer';

import './Users.css';

class Users extends React.Component {
    render() {
        return (
            <>
                <Header />
                <main className='full siteContent'>
                    <div className='container'>
                        <EditUsers />
                        <AddUser />
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}

export default Users;