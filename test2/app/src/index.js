import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './config.js';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
