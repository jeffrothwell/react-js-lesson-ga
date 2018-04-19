import React, { Component } from 'react';
import './App.css';

// bring in Comment class
import Comment from './Comment.js';

class Post extends Component {
  render() {

    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />
    ]

    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>by: {this.props.author}</h3>
        <p>{this.props.body}</p>
        <p>Comments:</p>
        {allComments}
      </div>
    );
  }
}

export default Post;
