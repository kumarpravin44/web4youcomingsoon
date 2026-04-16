import React, { useState, useEffect } from 'react';
import hiddenLogo from '../assets/facbook-logo.png';
import LeadForm from '../LeadForm';

function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider images - using high-quality stock images
  const sliderImages = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80', // Digital Marketing Dashboard
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80', // Team Collaboration
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80', // Modern Office Tech
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80', // Analytics & Growth
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section className="hero-banner" id="home">
      {/* Floating Particles */}
      <div className="hero-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Background Slider */}
      <div className="hero-slider">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="hero-overlay"></div>
        
        {/* Slider Dots */}
        <div className="slider-dots">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="hero-container">
        {/* Left Side - Heading & Content */}
        <div className="hero-content">
          <span className="hero-badge">
            <i className='bx bx-rocket'></i> AI-Powered Marketing Solutions
          </span>
          <h1 className="hero-title">
            Grow Your Business with <span>Smart Digital Marketing</span>
          </h1>
          <p className="hero-subtitle">
            Get more leads, more customers, and more revenue with our AI-driven marketing strategies. We help small businesses achieve big results with affordable & result-driven solutions.
          </p>

          <ul className="hero-features">
            <li><i className='bx bx-check-circle'></i> 10+ Years Experience</li>
            <li><i className='bx bx-check-circle'></i> AI Lead Generation</li>
            <li><i className='bx bx-check-circle'></i> Website & App Dev</li>
            <li><i className='bx bx-check-circle'></i> SEO & Paid Ads</li>
          </ul>

          <img src={hiddenLogo} style={{display: 'none'}} alt="" />
        </div>

        {/* Right Side - Lead Form */}
        <div className="hero-form">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
