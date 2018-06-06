import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FruitFilter from './FruitFilter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FruitFilter />, document.getElementById('root'));
registerServiceWorker();
