import React from 'react';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Contact Us</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Ready to grow your business? Let's talk!</p>
        </div>

        <div className="contact-info-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <i className='bx bx-phone'></i>
            </div>
            <div className="contact-details">
              <h4>Phone</h4>
              <a href="tel:+918090212521">+91 80902 12521</a>
              <a href="tel:+919971411966">+91 99714 11966</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className='bx bx-envelope'></i>
            </div>
            <div className="contact-details">
              <h4>Email</h4>
              <a href="mailto:info@web4you.in">info@web4you.in</a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className='bx bx-map'></i>
            </div>
            <div className="contact-details">
              <h4>Location</h4>
              <p>Noida, Uttar Pradesh<br />India - 201301</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className='bx bx-time'></i>
            </div>
            <div className="contact-details">
              <h4>Working Hours</h4>
              <p>Mon - Sat: 10:00 AM - 7:00 PM<br />Sunday: Closed</p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default Contact;
