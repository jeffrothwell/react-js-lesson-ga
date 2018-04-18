import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Hello name={"Nick"} age={24} />,
  document.getElementById('root')
);
registerServiceWorker();
