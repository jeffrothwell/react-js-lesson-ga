import React, { Component } from 'react';

class Procedures extends Component {
  render() {
    return (
      <div>
        <h2>Procedures</h2>
        <div>
          {this.props.procedures.map(proc => {
            return (
              <div>
                <h4>{proc.name}</h4>
                <p>Cost: ${proc.cost}</p>
                <p>Time: {proc.timeInMinutes} minutes</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Procedures;
