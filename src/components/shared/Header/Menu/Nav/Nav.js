import React from 'react';
import style from './Nav.module.css';

const Nav = () => {
  const pages = ['Тесты', 'Функционал', 'Конструктор Тестов'];
  const navLink = pages.map(page => (
    <a className={style.navlink} key={page} href={`/${page}`}>
      {page}
    </a>
  ));
  return (
    <div>
      <nav className={style.navbar}>{navLink}</nav>
    </div>
  );
};
export default Nav;
