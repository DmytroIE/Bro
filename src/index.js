import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import User from './components/shared/Header/Menu/User/User';

ReactDOM.render(
  // Render from here
  <User
    username="Федор Константинович Годунов-Чердынцев"
    avatarURL="https://st.depositphotos.com/1937573/2310/i/450/depositphotos_23100736-stock-photo-handsome-man-outdoors-portrait.jpg"
  />,
  // to here
  document.getElementById('root'),
);
