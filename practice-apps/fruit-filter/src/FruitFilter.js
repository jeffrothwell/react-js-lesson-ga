import React, { Component } from 'react';
import FruitFilterInput from './FruitFilterInput';
import FruitList from './FruitList';

class FruitFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitsToDisplay: props.fullFruitList,
      unmatchedFruits: [],
      filterValue: ''
    }
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange(e) {
    e.preventDefault()

    const filterValue = e.target.value
    this.setState((prevState, props) => {
      // Filter down the list of fruits
      const filteredFruitList = props.fullFruitList.filter(fruit =>
      fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))

      const unmatchedFruits = props.fullFruitList.filter(fruit =>
      !fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))

      return {
        fruitsToDisplay: filteredFruitList,
        unmatchedFruits,
        filterValue
      }
    })
  }

  render() {
    return (
      <div>
        <FruitFilterInput value={this.state.filterValue} onChange={this.handleFilterChange} />
        <h3>Matches:</h3>
        <FruitList fruitsToDisplay={this.state.fruitsToDisplay} />
        <h3>No Matches Here:</h3>
        <FruitList fruitsToDisplay={this.state.unmatchedFruits} />
      </div>
    );
  }
}

export default FruitFilter;
