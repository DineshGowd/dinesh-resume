import React from 'react';
import { createRoot } from 'react-dom/client';

// css
import './assets/styles/css/index.css';

// redux
import { Provider } from 'react-redux'
import store from './store/store'

import Routes from './Routes';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>
);
