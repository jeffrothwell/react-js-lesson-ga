import React, { Component } from 'react';

class FruitFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitsToDisplay: props.fullFruitList,
      filterValue: '';
    }
  }

  handleFilterChange(e) {
    e.preventDefault()

    const filterValue = e.target.value
    this.setState((prevState, props) => {
      // Filter down the list of fruits
      const filteredFruitList = props.fullFruitList.filter(fruit =>
      fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))

      return {
        fruitsToDisplay: filteredFruitList,
        filterValue
      }
    })
  }

  render() {
    return (
      <div>
        <FruitFilterInput value={this.state.filterValue} onChange={this.handleFilterChange} />
        <FruitList fruitsToDisplay={this.state.fruitsToDisplay} />
      </div>
    );
  }
}

export default FruitFilter;
