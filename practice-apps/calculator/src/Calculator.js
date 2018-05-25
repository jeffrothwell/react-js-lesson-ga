import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props) {
    super()

    this.state = { sum: 0 }

    this.calculateSum = this.calculateSum.bind(this)
  }

  calculateSum() {
    console.log(this.state);
    var newSum = (parseInt(this.refs.val1.value) || 0) + (parseInt(this.refs.val2.value) || 0);
    console.log(newSum);
    this.setState({
      sum: newSum
    })
  }

  render() {
    return (
      <div className="Calculator">
        <h1>Add with React!</h1>

        <div className="add">
           <input
              type="text"
              ref="val1"
              onKeyUp={this.calculateSum}
            />
           <span>+</span>
           <input
             type="text"
             ref="val2"
             onKeyUp={this.calculateSum}
            />
           <span>=</span>
           <h3>{this.state.sum}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
