import React, { useState } from "react";
import emailjs from '@emailjs/browser';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
    city: "",
    problem: "",
    goal: "",
    demo: "Yes",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration - use your EmailJS account values
    const serviceID = 'service_uh370pk';
    const templateID = 'template_4b1y89j';
    const publicKey = '36pYy8V2d0sgpAG5l';

    const templateParams = {
      from_name: formData.name,
      from_email: 'noreply@web4you.com',
      reply_to: 'kumar.pravin160@gmail.com',
      to_email: 'kumar.pravin160@gmail.com',
      recipient_email: 'kumar.pravin160@gmail.com',
      recipient: 'kumar.pravin160@gmail.com',
      to: 'kumar.pravin160@gmail.com',
      email: 'kumar.pravin160@gmail.com',
      to_name: 'Web4You Leads',
      subject: `Lead Inquiry from ${formData.name || 'Website Visitor'}`,
      name: formData.name,
      phone: formData.phone,
      business_type: formData.businessType,
      city: formData.city,
      problem: formData.problem,
      goal: formData.goal,
      demo: formData.demo,
      message: `Lead Inquiry Details:\nName: ${formData.name}\nPhone: ${formData.phone}\nBusiness Type: ${formData.businessType}\nCity: ${formData.city}\nMain Problem: ${formData.problem}\nGoal: ${formData.goal}\nFree Demo: ${formData.demo}`,
    };

    console.log('EmailJS templateParams:', templateParams);

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          businessType: "",
          city: "",
          problem: "",
          goal: "",
          demo: "Yes",
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        const message = error?.text || error?.message || JSON.stringify(error);
        alert(`There was an error submitting your request. ${message}`);
      });
  };

  if (submitted) {
    return (
      <section className="lead-section">
        <div className="lead-success-page">
          <h2>Thank you! Your inquiry has been sent.</h2>
          <p>
            We received your request and our team will contact you shortly. If you need to submit another inquiry, click the button below.
          </p>
          <button
            type="button"
            className="lead-submit"
            onClick={() => setSubmitted(false)}
          >
            Submit Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="lead-section">
      <form onSubmit={handleSubmit} className="lead-form">
        <div className="lead-form-header">
          <h2>Get More Leads with AI 🚀</h2>
          <p>Fill the form and get a free AI marketing demo for your business</p>
        </div>

        <div className="lead-form-grid">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            required
          >
            <option value="">Select Business Type</option>
            <option>Gym</option>
            <option>Salon</option>
            <option>Coaching Institute</option>
            <option>Real Estate</option>
            <option>E-commerce Store</option>
            <option>Mobile App</option>
            <option>Software / SaaS</option>
            <option>Website / Service Business</option>
          </select>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <select
            name="problem"
            value={formData.problem}
            onChange={handleChange}
            required
          >
            <option value="">Select Your Main Problem</option>
            <option>Not getting enough leads</option>
            <option>Low website traffic</option>
            <option>Low app downloads</option>
            <option>Poor sales conversion</option>
            <option>Ads not performing well</option>
          </select>
          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
          >
            <option value="">Select Your Goal</option>
            <option>Get 10+ leads per day</option>
            <option>Increase app downloads</option>
            <option>Boost website traffic</option>
            <option>Increase sales</option>
          </select>
          <select
            name="demo"
            value={formData.demo}
            onChange={handleChange}
            className="full-width"
          >
            <option>Yes - I want a free demo</option>
            <option>No</option>
          </select>
        </div>

        <button type="submit" className="lead-submit">
          Get Free Demo
        </button>
      </form>
    </section>
  );
}
