import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <h1>Add with React!</h1>

        <div className="add">
           <input type="text" />
           <span>+</span>
           <input type="text" />
           <span>=</span>
           <h3>Addition results go here!</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
