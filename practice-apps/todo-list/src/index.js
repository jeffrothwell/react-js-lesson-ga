import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import ToDoList from './ToDoList';

var theList = [
  "buy Camden tix",
  "listen to Tahoe Tweezer again",
  "surrender to the flow"
]

ReactDOM.render(
  <ToDoList listItems={theList} />,
  document.getElementById('root')
);
