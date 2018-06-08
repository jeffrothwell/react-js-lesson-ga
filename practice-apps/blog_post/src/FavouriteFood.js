import React, {Component} from 'react';

const FavouriteFood = props => (
  <div>
    <h3>{props.favouriteFood.title}</h3>
    <p>{props.favouriteFood.body}</p>
  </div>
)

export default FavouriteFood
