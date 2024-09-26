import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src='https://f.hellowork.com/blogdumoderateur/2013/02/nyan-cat-gif-1.gif' alt='Footer Logo' />
        </div>
        <ul className="footer-links">
          <li><a href="/news">News</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src='https://upload.wikimedia.org/wikipedia/commons/e/e6/Twitter-new-logo.jpg' alt='Twitter' />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' alt='Facebook' />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' alt='Instagram' />
          </a>
        </div>
        <p className="footer-copy">© 2024 Manga Site. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
