import React from 'react';
import './HomePage.css';


const Navbar = () => {
    return (
<header className="homepage-header">
        <nav className="navbar">
          <div className="logo">Community Anchor</div>
          <div className="navigation-links">
            <a href="/">Home</a>
            <a href="/profile">Applications</a>
            <a href="/settings">Settings</a>
            </div>
        </nav>
      </header>
    )};

export default Navbar;