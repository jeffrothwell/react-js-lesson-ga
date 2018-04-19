import React, { Component } from 'react';
import './App.css';

// bring in Comment class
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {
  render() {

    let allAuthors = this.props.authors.map(author => {
      return <Author body={author} />
    })

    let allComments = this.props.comments.map(comment => {
      return <Comment body={comment} />
    })

    return (
      <div>
        <h1>{this.props.title}</h1>
        {allAuthors}
        <p>{this.props.body}</p>
        <p>Comments:</p>
        {allComments}
      </div>
    );
  }
}

export default Post;
