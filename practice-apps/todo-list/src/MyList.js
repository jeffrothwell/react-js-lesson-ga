import React, { Component } from 'react';
import ListItem from './ListItem';

class MyList extends Component {
  constructor(props) {
    super()

    this.state = { stateListItems: props.listItems }
  }

  clearList (e) {
    this.setState({
      stateListItems: []
    })
  }

  render() {

    let listItemRenders = this.state.stateListItems.map( (item, index) => {
      return <ListItem doThis={item} key={index} />
    })

    return (
      <div class="list-container">
        <h1>This stuff needs to get done:</h1>
        <ol>
          {listItemRenders}
        </ol>
        <button onClick={(e) => this.clearList(e)}>Clear List</button>
      </div>
    );
  }
}

export default MyList;
