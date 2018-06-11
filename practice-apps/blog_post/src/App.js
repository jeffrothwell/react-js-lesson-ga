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
              <Link to="/blog">Blog</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/thebestshow">The Best Show</Link>
              <Link to="/favouritefood">My Favourite Food</Link>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={
              () => (<Post blogPost={this.props.blogPost}/>)
            }/>
            <Route path="/aboutme" component={
              () => (<AboutMe aboutMe={this.props.aboutMe}/>)
            }/>
            <Route path="/thebestshow" component={
              () => (<TheBestShow theBestShow={this.props.theBestShow}/>)
            }/>
            <Route path="/favouritefood" component={
              () => (<FavouriteFood favouriteFood={this.props.favouriteFood}/>)
            }/>
          </div>
        </Router>
        <p>Thanks for visiting Wookersons page</p>
      </div>
    );
  }
}

export default App;
