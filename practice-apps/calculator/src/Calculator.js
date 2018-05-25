import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props) {
    super()

    this.state = {
      num1: 0,
      num2: 0,
      sum: 0
    }
  }

  calculateSum() {
    var newSum = this.state.num1 + this.state.num2;
    this.setState({
      sum: newSum
    })
  }

  updateNum1(e) {
    this.setState({
      num1: e.target.value
    })
    this.calculateSum()
  }

  render() {
    return (
      <div className="Calculator">
        <h1>Add with React!</h1>

        <div className="add">
           <input
              type="text"
              onChange={(e) => this.updateNum1(e)}
              value={this.state.num1}
            />
           <span>+</span>
           <input type="text" />
           <span>=</span>
           <h3>{this.state.sum}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
