import React, { Component } from 'react';
import ListItem from './ListItem';

class MyList extends Component {
  render() {
    return (
      <div>
        <h1>This stuff needs to get done:</h1>
        <ul>
          <ListItem />
        </ul>
      </div>
    );
  }
}

export default MyList;
