import React, {Component} from 'react';

class Comment extends Component {
  constructor (props) {
    // super() makes sure we first load all funcitonality of the Component class
    super()
    this.state = { moodPoints: 1 }
  }

  render () {
    return (
      <div>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default Comment
