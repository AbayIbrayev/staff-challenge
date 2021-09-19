import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className={`header ${menu && 'header__open'}`}>
      <div className='links'>
        <NavLink
          to='/dashboard'
          activeClassName='active'
          onClick={() => setMenu(false)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to='/agency'
          activeClassName='active'
          onClick={() => setMenu(false)}
        >
          Our Agency
        </NavLink>
        <NavLink
          exact
          to='/'
          activeClassName='active'
          onClick={() => setMenu(false)}
        >
          Our Staff
        </NavLink>
        <NavLink
          to='/locations'
          activeClassName='active'
          onClick={() => setMenu(false)}
        >
          Locations
        </NavLink>
        <NavLink
          to='/latest'
          activeClassName='active'
          onClick={() => setMenu(false)}
        >
          Latest
        </NavLink>
        <NavLink
          to='/upcoming'
          activeClassName='active'
          onClick={() => setMenu(false)}
        >
          Upcoming
        </NavLink>
        <NavLink
          to='/resources'
          activeClassName='active'
          onClick={() => setMenu(false)}
        >
          Resources
        </NavLink>
        <NavLink
          to='/your'
          activeClassName='active'
          onClick={() => setMenu(false)}
        >
          Your Stein IAS
        </NavLink>
      </div>

      <button className='hamburgerBtn' onClick={() => setMenu(!menu)}>
        <i className='fa fa-bars'></i>
      </button>
    </div>
  );
};

export default Header;
