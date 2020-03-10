import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Landing/Landing';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import Main from './Main/Main';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/main' component={Main} />
      </Switch>
    </div>
  );
}

export default App;
