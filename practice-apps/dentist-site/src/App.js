import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Dentist Site</h1>
        <Router>
          <div>
            <nav>
              <Link to="/">Go to Home Page</Link>
              <Link to="/procedures">See Our Procedures</Link>
              <Link to="/contact">Contact Us!</Link>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/procedures" component={
              () => (<Procedures procedures={this.props.procedures}/>)
            }/>
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
