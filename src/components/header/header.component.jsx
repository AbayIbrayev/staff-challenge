import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/agency'>Our Agency</Link>
      <Link to='/'>Our Staff</Link>
      <Link to='/locations'>Locations</Link>
      <Link to='/latest'>Latest</Link>
      <Link to='/upcoming'>Upcoming</Link>
      <Link to='/resources'>Resources</Link>
      <Link to='/your'>Your Stein IAS</Link>
    </div>
  );
};

export default Header;
