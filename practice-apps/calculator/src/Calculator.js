import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props) {
    super()

    this.state = { sum: 0, operation: '+' }

    this.calculateSum = this.calculateSum.bind(this)
  }

  calculateSum() {
    var newSum = (parseInt(this.refs.val1.value) || 0) + (parseInt(this.refs.val2.value) || 0);

    this.setState({
      sum: newSum,
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
            <div className="radio">
              <label>
                <input type="radio" value="+" checked={this.state.operation === '+'} />
                +
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="-" />
                -
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="x" />
                x
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="/" />
                /
              </label>
            </div>
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
