import React, { Component } from 'react';

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
      <div>
        <h1>Dentist Site</h1>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/procedures" component={Procedures} />
            <Route path="/contact" component={Contact} />
            <p><Link to="/">Go to Home Page</Link></p>
            <p><Link to="/procedures">See Our Procedures</Link></p>
            <p><Link to="/contact">Contact Us!</Link></p>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
