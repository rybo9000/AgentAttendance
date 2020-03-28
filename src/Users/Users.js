import React from 'react';
import JWT from 'jsonwebtoken';

import Header from '../Header/Header';
import EditUsers from '../EditUsers/EditUsers';
import AddUser from '../AddUser/AddUser';
import Footer from '../Footer/Footer';

import config from '../config/config.js';
import '../config/style.css';
import './Users.css';

class Users extends React.Component {
    
    constructor(props) {
        super(props)
    
        const users = [
            {firstname: 'John', lastname: 'Riley', id: 1},
            {firstname: 'Bill', lastname: 'Bellington', id: 2},
            {firstname: 'Tim', lastname: 'Baker', id: 3},
            {firstname: 'Marcia', lastname: 'Smith', id: 4},
            {firstname: 'John', lastname: 'Hughes', id: 5}
        ]    
        
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password:'',
            email: '',
            users: users,
            error: null
        }
    }

    componentDidMount() {
        
        const token = localStorage.getItem('aatoken')
        
        if (!token) {
            this.props.history.push('/login')
        } else {

            const decodedJWT = JWT.verify(token, config.REACT_APP_JWT_SECRET)
        
            const options = {
                headers: {
                    "mcid": decodedJWT.mcid
                }
            }
            
            // FETCH CLASSES AND SET STATE
            fetch(`${config.REACT_APP_API_ENDPOINT}/api/mc/users`, options)
                .then(response => response.json())
                .then(users => this.setState({
                    users
                }))

        }
        


    }
    
    handleSubmit = (e) => {
        
        e.preventDefault();

        const token = localStorage.getItem('aatoken')
        const decodedJWT = JWT.verify(token, config.REACT_APP_JWT_SECRET)
        const mcid = decodedJWT.mcid;
        
        const { firstname, lastname, username, password, email } = this.state

        const newUser = { firstname, lastname, username, password, email, mcid }
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser)
        }

        fetch(`${config.REACT_APP_API_ENDPOINT}/api/mc/users`, options)
        .then (response => response.json())
        .then (response => {
            
            if (response.error) {
                this.setState({
                    error: response.error
                })

            } else {

                this.setState({
                    firstname: '',
                    lastname: '',
                    username: '',
                    password:'',
                    email: '',
                    users: [{
                        firstname: response[0].firstname, 
                        lastname: response[0].lastname, 
                        id: response[0].id
                    },...this.state.users],
                    error: null
                })

            }


        })




            
    }

    updateInput = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    
    render() {

        return (
            <>
                <Header />
                <main className='full siteContent'>
                    <div className='container'>
                        <EditUsers users={this.state.users} />
                        <AddUser firstname={this.state.firstname} error={this.state.error} lastname={this.state.lastname} username={this.state.username} password={this.state.password} email={this.state.email} handleSubmit = {this.handleSubmit} updateInput={this.updateInput} />
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}

export default Users;