import React, { Component } from 'react';
import './App.css';

// bring in Comment class
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {
  constructor (props) {
    super()

    this.state = { body: props.blogPost.body }
  }

  updateBody(e){
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }

  handleFormInput(e){
    this.setState({
      body: e.target.value
    })
  }

  render() {

    let allAuthors = this.props.blogPost.authors.map(author => {
      return <Author body={author} />
    })

    let allComments = this.props.blogPost.comments.map(comment => {
      return <Comment body={comment} />
    })

    return (
      <div>
        <h3>{this.props.blogPost.title}</h3>
        {allAuthors}
        <p>{this.state.body}</p>
        <button onClick={(e) => this.updateBody(e)}>Edit Body</button>
        <input type="text" onChange={(e) => this.handleFormInput(e)} />
        <p>Comments:</p>
        {allComments}
      </div>
    );
  }
}

export default Post;
