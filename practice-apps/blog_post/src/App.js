import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Post from './Post'
import Home from './Home'
import AboutMe from './AboutMe'
import TheBestShow from './TheBestShow'
import FavouriteFood from './FavouriteFood'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/aboutme">See Our Procedures</Link>
              <Link to="/contact">Contact Us!</Link>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/aboutme" component={
              () => (<AboutMe aboutMe={this.props.aboutMe}/>)
            }/>
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
        <h1>Thanks for visiting Wookersons page</h1>
        < Post blogPost={this.props.blogPost} />
        < AboutMe aboutMe={this.props.aboutMe} />
      </div>
    );
  }
}

export default App;
