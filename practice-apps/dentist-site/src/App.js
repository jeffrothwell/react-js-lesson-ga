import React, { Component } from 'react';
import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Dentist Site</h1>
        <Home></Home>
        <Procedures></Procedures>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
