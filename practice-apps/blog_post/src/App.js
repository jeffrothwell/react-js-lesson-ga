import React, { Component } from 'react';
import './App.css';
import Post from './Post'
import AboutMe from './AboutMe'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Thanks for visiting Wookersons page</h1>
        < Post blogPost={this.props.blogPost} />
        < AboutMe aboutMe={this.props.aboutMe} />
      </div>
    );
  }
}

export default App;
