import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { BrowserRouter } from 'react-router-dom';
import User from './components/shared/Header/Menu/User/User';

ReactDOM.render(
  <BrowserRouter>
    <User />
  </BrowserRouter>,
  document.getElementById('root'),
);
