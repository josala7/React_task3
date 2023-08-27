import React from 'react';
import './Footer.module.css';

const Footer = () => {
  return (
    <footer className="footer text-center fw-bold">
      <div className="footer-content bg-primary">
        <p>&copy;  Welcome to my React Project</p>
        <div className="social-links ">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://github.com/josala7/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/yousef-mohamed-000677256/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;