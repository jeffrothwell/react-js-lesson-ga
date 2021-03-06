import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const procedures = [
  {
    name: "Spit Shine",
    cost: 50,
    timeInMinutes: 30
  },
  {
    name: "Deep Clean",
    cost: 200,
    timeInMinutes: 60
  },
  {
    name: "Cavity Filling",
    cost: 400,
    timeInMinutes: 60
  },
  {
    name: "Root Canal",
    cost: 600,
    timeInMinutes: 120
  }
]

ReactDOM.render(<App procedures={procedures} />,
  document.getElementById('root')
);
registerServiceWorker();
