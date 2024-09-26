import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user')); // Get user info from localStorage

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to scroll to the top when a link is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling
    });
    setIsOpen(false); // Close the menu after clicking the link
  };

  return (
    <header>
      <div className="logo">
        ONE
        <img src='https://i.pinimg.com/564x/0b/7f/31/0b7f31a2d2d5b447e070987f48badd55.jpg' alt='Description of the logo' />
      </div>
      <nav className={isOpen ? 'nav open' : 'nav'}>
  <ul>
    <li><Link to="/home" onClick={scrollToTop}>HOME</Link></li>
    <li><Link to="/mangapage" onClick={scrollToTop}>MANGA</Link></li>
    <li><Link to="/news" onClick={scrollToTop}>NEWS</Link></li>
    <li><Link to="/aboutus" onClick={scrollToTop}>About US</Link></li>
    {user ? (
      <li><Link to="/admin" onClick={scrollToTop} className="admin-link">ADMIN</Link></li>
    ) : (
      <>
        <li><Link to="/login" onClick={scrollToTop} className="login-link">LOGIN</Link></li>
        <li><Link to="/register" onClick={scrollToTop} className="register-link">REGISTER</Link></li>
      </>
    )}
  </ul>
</nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </header>
  );
};

export default Header;