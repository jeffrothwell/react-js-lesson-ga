import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props) {
    super()

    this.state = { result: 0, operation: '+' }

    this.performCalculation = this.performCalculation.bind(this)
    this.handleOperationChange = this.handleOperationChange.bind(this)
  }

  performCalculation() {
    var newSum = (parseInt(this.refs.val1.value) || 0) + (parseInt(this.refs.val2.value) || 0);

    this.setState({
      result: newSum,
    })
  }

  handleOperationChange(e) {
    this.setState({
      operation: e.target.value
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
              onKeyUp={this.performCalculation}
            />
            <div className="radio">
              <label>
                <input type="radio" value="+"
                  checked={this.state.operation === '+'}
                  onChange={this.handleOperationChange}
                />
                +
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="-"
                  checked={this.state.operation === '-'}
                  onChange={this.handleOperationChange}
                />
                -
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="x"
                  checked={this.state.operation === 'x'}
                  onChange={this.handleOperationChange}
                />
                x
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="/"
                  checked={this.state.operation === '/'}
                  onChange={this.handleOperationChange}
                />
                /
              </label>
            </div>
           <input
             type="text"
             ref="val2"
             onKeyUp={this.performCalculation}
            />
           <span>=</span>
           <h3>{this.state.result}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
