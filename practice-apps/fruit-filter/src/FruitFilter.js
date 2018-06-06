import React, { Component } from 'react';

class FruitFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitsToDisplay = props.fullFruitList,
      filterValue = '';
    }
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default FruitFilter;
