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

    this.updateNum1 = this.updateNum1.bind(this)
    this.updateNum2 = this.updateNum2.bind(this)
    this.calculateSum = this.calculateSum.bind(this)
  }

  calculateSum() {
    console.log(this.state);
    var newSum = (this.state.num1) + (this.state.num2);
    console.log(newSum);
    this.setState({
      sum: newSum
    })
  }

  updateNum1(e) {
    var newNum1 = parseInt(e.target.value)
    this.setState({
      num1: newNum1
    })
    this.calculateSum()
  }

  updateNum2(e) {
    var newNum2 = parseInt(e.target.value)
    this.setState({
      num2: newNum2
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
           <input
             type="text"
             onChange={(e) => this.updateNum2(e)}
             value={this.state.num2}
            />
           <span>=</span>
           <h3>{this.state.sum}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
