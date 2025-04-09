// src/components/Navbar.js (or wherever your Navbar is)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext.jsx'; // <-- Import useTheme

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // <-- Use the theme context

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper to close menu on link click
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Close menu and toggle theme
  const handleThemeToggle = () => {
    toggleTheme();
    // Optionally close mobile menu if open when toggling theme
    // setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
         <Link to="/" onClick={handleLinkClick}>Sarah Ishimwe</Link>
      </div>

      <button className="burger-menu" onClick={toggleMobileMenu} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>

      {/* Add a class based on theme for potential specific navbar styling */}
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        <li><Link to="/portfolio" onClick={handleLinkClick}>Portfolio</Link></li>
        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        {/* Add Theme Toggle Button */}
        <li>
          <button
            onClick={handleThemeToggle}
            className="theme-toggle-button"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'} {/* Example text/icon */}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;