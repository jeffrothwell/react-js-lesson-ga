// bring in React and Component from React

import React, {Component} from 'react';

// define our Hello component
class Hello extends Component {
  // what should happen when we load our component
  constructor (props) {
    // super() makes sure we first load all funcitonality of the Component class
    super()
    // define initial state
    this.state = { moodPoints: 1 }
  }
  // what should the component render?
  render () {
    // make sure to return some UI
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>You are {this.props.age} years old</p>
        <p>You love {this.props.favourites[1]}</p>
        <p>On a scale of 1 - 10</p>
        <p>Your mood level is: {this.state.moodPoints}</p>
      </div>
    )
  }
}

export default Hello
