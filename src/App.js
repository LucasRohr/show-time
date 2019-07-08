import React from 'react';
import './App.css';
import { LoginScene } from './scenes/login/login-scene';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { RegisterScene } from './scenes/register/register-scene';

function App() {
  return (

    <Router history={history} >
      <Route path="/login" component={LoginScene}/>
      <Route path="/registro" component={RegisterScene}/>
    </Router>

  );
}

export default App;