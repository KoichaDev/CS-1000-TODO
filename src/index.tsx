import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalContextProvider from './store/GlobalContextProvider';
import './index.scss';

ReactDOM.render(
  <GlobalContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalContextProvider>,
  document.getElementById('root')
);
