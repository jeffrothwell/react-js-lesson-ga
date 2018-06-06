import React, { Component } from 'react';

const FruitList = props => (
  <ul>
    { props.fruitsToDisplay.map( fruit => <li>{fruit}</li> ) }
  </ul>
)

export default FruitList;
