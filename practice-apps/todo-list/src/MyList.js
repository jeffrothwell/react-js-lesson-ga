import React, { Component } from 'react';
import ListItem from './ListItem';

class MyList extends Component {
  render() {
    return (
      <div class="list-container">
        <h1>This stuff needs to get done:</h1>
        <ul>
          <ListItem doThis={"buy Camden tix"}/>
        </ul>
      </div>
    );
  }
}

export default MyList;
