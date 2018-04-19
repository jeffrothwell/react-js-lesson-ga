import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div>
        <h1>The Lord Of The Rings: {this.props.title}</h1>
        <p>Runtime: {this.props.hrs}h {this.props.mins}min</p>
      </div>
    )
  }
}

export default Movie
