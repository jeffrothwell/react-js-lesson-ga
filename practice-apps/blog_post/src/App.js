import React, { Component } from 'react';
import './App.css';
import Post from './Post'

// bring in Comment and Author class
import Comment from './Comment.js';
import Author from './Author.js';

class App extends Component {
  render() {
    return (
      <div>
        <
          Post
          title={this.props.title}
          authors={this.props.authors}
          body={this.props.body}
          comments={this.props.comments}
        />
      </div>
    );
  }
}

export default App;
