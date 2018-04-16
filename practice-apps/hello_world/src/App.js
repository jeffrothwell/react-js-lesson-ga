// bring in React and Component from React

import React, {Component} from 'react';

// define our Hello component
class Hello extends Component {
  // what should the component render?
  render () {

    // make sure to return some UI
    return (
      <h1>Hello World!</h1>
    )
  }
}

export default Hello
