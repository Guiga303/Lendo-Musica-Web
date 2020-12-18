import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import App from './App';

import icon from './assets/favicon.svg';

ReactDOM.render(
  <React.StrictMode>
    <Favicon url={icon} />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
