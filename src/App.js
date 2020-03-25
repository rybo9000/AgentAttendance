import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Landing/Landing';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import Main from './Main/Main';
import Users from './Users/Users';
import Classes from './Classes/Classes';
import CheckIn from './CheckIn/CheckIn';
import Reports from './Reports/Reports';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/main' component={Main} />
        <Route path='/users' component={Users} />
        <Route path='/classes' component={Classes} />
        <Route path='/checkin/:id' component={CheckIn} />
        <Route path='/reports' component={Reports} />
      </Switch>
    </div>
  );
}

export default App;
