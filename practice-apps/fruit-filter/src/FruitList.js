import React, { Component } from 'react';

const FruitList = props => (
  <ul>
    { props.fruitList.map( fruit => <li>{fruit}</li> ) }
  </ul>
)

export default FruitList;
