import React, { Component } from 'react';
import ListItem from './ListItem';

class MyList extends Component {
  render() {

    let listItemRenders = this.props.listItems.map( (item, index) => {
      return <ListItem doThis={item} key={index} />
    })

    return (
      <div class="list-container">
        <h1>This stuff needs to get done:</h1>
        <ul>
          {listItemRenders}
        </ul>
      </div>
    );
  }
}

export default MyList;
