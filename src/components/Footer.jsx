import React from 'react';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Web4You Logo" className="footer-logo" />
            <p>Your trusted partner for digital marketing, web development, and AI-powered growth solutions.</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/web4younoida/" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-facebook'></i>
              </a>
              <a href="https://www.linkedin.com/company/web4you-noida/" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-linkedin'></i>
              </a>
              <a href="https://www.instagram.com/web4you_1000m/" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-instagram'></i>
              </a>
              <a href="https://wa.me/918090212521" target="_blank" rel="noopener noreferrer">
                <i className='bx bxl-whatsapp'></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Website Development</a></li>
              <li><a href="#services">Mobile App Development</a></li>
              <li><a href="#services">AI Marketing</a></li>
              <li><a href="#services">SEO Services</a></li>
              <li><a href="#services">Paid Advertising</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <i className='bx bx-phone'></i>
                <a href="tel:+918090212521">+91 80902 12521</a>
              </li>
              <li>
                <i className='bx bx-envelope'></i>
                <a href="mailto:info@web4you.in">info@web4you.in</a>
              </li>
              <li>
                <i className='bx bx-map'></i>
                <span>Noida, UP, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Web4You. All Rights Reserved. | Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
