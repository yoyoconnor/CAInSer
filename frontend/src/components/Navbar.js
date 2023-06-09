import React from 'react';
import './HomePage.css';


const Navbar = () => {
    return (
<header className="homepage-header">
        <nav className="navbar">
          <div className="logo">YourLogo</div>
          <div className="navigation-links">
            <a href="/">Home</a>
            <a href="/profile">Profile</a>
            <a href="/connections">Connections</a>
            </div>
        </nav>
      </header>
    )};

export default Navbar;