import React from 'react';
import './App.css';
import { LoginScene } from './scenes/login/login.scene';
import { Router, Route } from 'react-router-dom';
import history from './history';

function App() {
  return (

    <Router history={history} >
      <div className="app" >
        <Route path="/" component={LoginScene} />
        <Route path="/registro" component={LoginScene} />
      </div>
    </Router>

  );
}

export default App;
