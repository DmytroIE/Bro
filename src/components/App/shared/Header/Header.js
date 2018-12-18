import React from 'react';
import { NavLink } from 'react-router-dom';

const style = {
  container: { height: '380px', backgroundColor: '#888', display: 'flex' },
  link: {
    textTransform: 'uppercase',
    marginRight: '30px',
  },
};

const Header = () => (
  <div style={style.container}>
    <NavLink style={style.link} to="/">
      Home
    </NavLink>
    <NavLink style={style.link} to="/testpage">
      Test
    </NavLink>
    <NavLink style={style.link} to="/resultspage">
      Results
    </NavLink>
  </div>
);

export default Header;
