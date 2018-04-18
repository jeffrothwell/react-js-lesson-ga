import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App';
import registerServiceWorker from './registerServiceWorker';

var person = {
  personName: "Jeff",
  personAge: 34
};

ReactDOM.render(
  <Hello
    name={person.personName}
    age={person.personAge}
  />,
  document.getElementById('root')
);
registerServiceWorker();
