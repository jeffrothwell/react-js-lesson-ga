import React, { Component } from 'react';
import './App.css';
import Post from './Post'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Thanks for visiting Wookersons page</h1>
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
