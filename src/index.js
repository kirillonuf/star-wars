import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import store from '@store/store';

import App from '@containers/App';

import '@styles/index.css';
import ThemeProvider from '@context/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider> 
    </React.StrictMode>
  </Provider>
);