import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Тесты</Link>
        </li>
        <li>
          <Link to="/functional">Функционал</Link>
        </li>
        <li>
          <Link to="/creator">Конструктор Тестов</Link>
        </li>
      </ul>
    </nav>
  </div>
);
export default Nav;
