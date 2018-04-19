import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Movie title={"The Fellowship Of The Ring"} hrs={2} mins={58} />
        <Movie title={"The Two Towers"} hrs={2} mins={59} />
        <Movie title={"The Return Of The King"} hrs={3} mins={21} />
      </div>
    );
  }
}

export default App;
