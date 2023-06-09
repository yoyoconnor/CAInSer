import React from 'react';
import './HomePage.css';
import SearchBar from './SearchBar';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div className="homepage">

        <Navbar />

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
