import React, { Component } from 'react';
import ListItem from './ListItem';

class MyList extends Component {
  constructor(props) {
    super()

    this.state = {
      stateListItems: props.listItems,
      newItem: ""
    }
  }

  clearList (e) {
    console.log("Clearing the list!");
    this.setState({
      stateListItems: []
    })
  }

  newItemChange (e) {
    console.log("Changing newItem");
    this.setState({
      newItem: e.target.value
    })
  }

  addItem (e) {
    console.log("Adding newItem to list");
    e.preventDefault()
    var currentList = this.state.stateListItems
    currentList.push(this.state.newItem)
    this.setState({
      newItem: "",
      stateListItems: currentList,
    })
  }

  render() {

    let listItemRenders = this.state.stateListItems.map( (item, index) => {
      return <ListItem doThis={item} key={index} />
    })

    return (
      <div className="list-container">
        <h1>This stuff needs to get done:</h1>
        <ol>
          {listItemRenders}
        </ol>
        <form>
          <input type="text"
           placeholder="Type an item here"
           onChange={(e) => this.newItemChange(e)}
           value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>

        <button onClick={(e) => this.clearList(e)}>Finished The List</button>
      </div>
    );
  }
}

export default MyList;
