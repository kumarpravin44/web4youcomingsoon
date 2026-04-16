import React from 'react';

function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">About Us</span>
          <h2 className="section-title">Who We Are</h2>
          <p className="section-subtitle">Your trusted partner for digital growth</p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <h3>10+ Years of Digital Excellence</h3>
            <p>
              Web4You is a leading digital marketing and development agency based in Noida, India. 
              We specialize in helping small businesses and startups achieve remarkable growth through 
              AI-powered marketing strategies, custom software development, and result-driven solutions.
            </p>
            <p>
              Our team of experts combines creativity with cutting-edge technology to deliver 
              websites, mobile apps, SaaS products, and marketing campaigns that actually convert. 
              We don't just drive traffic – we generate real leads and paying customers.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <i className='bx bx-check-circle'></i>
                <span>100% Customized Solutions</span>
              </div>
              <div className="about-feature">
                <i className='bx bx-check-circle'></i>
                <span>Affordable for Startups</span>
              </div>
              <div className="about-feature">
                <i className='bx bx-check-circle'></i>
                <span>Result-Driven Approach</span>
              </div>
              <div className="about-feature">
                <i className='bx bx-check-circle'></i>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="about-stats-grid">
            <div className="about-stat-card">
              <i className='bx bx-rocket'></i>
              <strong>500+</strong>
              <span>Projects Completed</span>
            </div>
            <div className="about-stat-card">
              <i className='bx bx-happy-heart-eyes'></i>
              <strong>300+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="about-stat-card">
              <i className='bx bx-world'></i>
              <strong>15+</strong>
              <span>Countries Served</span>
            </div>
            <div className="about-stat-card">
              <i className='bx bx-trophy'></i>
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
