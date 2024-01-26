// NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Sign In</Link></li>
        <li><Link to="/SignUp">Sign Up</Link></li>
        <li><Link to="/AuthDetails">Logged In Details</Link></li>
        <li><Link to="/ListUsers">List Users</Link></li>
        <li><Link to="/UserProfile">User Profile</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;