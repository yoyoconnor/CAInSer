import React from 'react';
import './HomePage.css';
import SearchBar from './SearchBar';

const HomePage = () => {
  return (
    <div className="homepage">
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

      <main className="homepage-main">
        <div className="hero-section">
          <h1>Welcome to Internsearch</h1>
          <p>by Community Anchor</p>
          <SearchBar/>
        </div>
      </main>

      <footer className="homepage-footer">
        <p>&copy; 2023 Community Anchor NFP. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
