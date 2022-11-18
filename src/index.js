import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  store  from './redux/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App /> 
      </Router>      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

