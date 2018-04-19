import React, { Component } from 'react';
import './App.css';

// bring in Comment class
import Comment from './Comment.js';

class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>by: {this.props.author}</h3>
        <p>{this.props.body}</p>
        <p>Comments:</p>
        <Comment body={this.props.comments[0]} />
      </div>
    );
  }
}

export default Post;
