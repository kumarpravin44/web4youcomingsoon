import React, { useState } from 'react';
import logo from '../assets/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt="Web4You Logo" />
        </div>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <i className='bx bx-x'></i>
          </button>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
            <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
            <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:+918090212521" className="header-cta">
            <i className='bx bxs-phone'></i> <span>Call Now</span>
          </a>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;