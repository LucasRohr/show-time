import React from 'react';
import logo from './logo.svg';
import './App.css';
import { colors } from './style/colors';
import { LoginScene } from './scenes/login/login.scene';

function App() {
  return (
    <div className="App">
      <LoginScene/>
    </div>
  );
}

export default App;
