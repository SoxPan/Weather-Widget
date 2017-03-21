import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'babel-polyfill';

import Routes from 'routes';
//import Menu from './components/menu'

// Load SCSS
import '../scss/app.scss';



// Render it to DOM
ReactDOM.render(
      <div>
        <Routes />
      </div>,
  document.getElementById('root')
);
