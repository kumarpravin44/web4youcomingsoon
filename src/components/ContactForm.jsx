import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS configuration
    const serviceID = 'service_uh370pk';
    const templateID = 'template_4b1y89j';
    const publicKey = '36pYy8V2d0sgpAG5l';

    const templateParams = {
      from_name: formData.name,
      from_email: 'noreply@web4you.com',
      reply_to: 'kumar.pravin160@gmail.com',
      to_email: 'kumar.pravin160@gmail.com',
      to_name: 'Web4You Leads',
      subject: `Contact Form - ${formData.name}`,
      name: formData.name,
      phone: formData.phone,
      message: `Contact Form Message:\n\nName: ${formData.name}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmitted(true);
        setLoading(false);
        setFormData({
          name: '',
          phone: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setLoading(false);
        const message = error?.text || error?.message || JSON.stringify(error);
        alert(`There was an error submitting your request. ${message}`);
      });
  };

  if (submitted) {
    return (
      <div className="contact-form-card">
        <div className="contact-success">
          <i className='bx bx-check-circle'></i>
          <h3>Thank You!</h3>
          <p>Your message has been sent successfully. We'll get back to you soon!</p>
          <button
            type="button"
            className="contact-submit-btn"
            onClick={() => setSubmitted(false)}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <h3>Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="simple-contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-submit-btn" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
