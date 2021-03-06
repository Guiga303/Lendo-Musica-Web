import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
};

export default App;
