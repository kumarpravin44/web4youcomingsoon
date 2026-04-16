import React from 'react';

function Services() {
  const services = [
    {
      icon: 'bx-code-alt',
      title: 'Website Development',
      description: 'Custom websites, landing pages, and web applications built with modern technologies for maximum performance.',
      features: ['React & Next.js', 'WordPress & Shopify', 'E-commerce Solutions']
    },
    {
      icon: 'bx-mobile-alt',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android that engage users and drive results.',
      features: ['React Native', 'Flutter Apps', 'iOS & Android Native']
    },
    {
      icon: 'bx-brain',
      title: 'AI Marketing Solutions',
      description: 'Leverage AI-powered tools and automation to generate leads and convert them into paying customers.',
      features: ['AI Chatbots', 'Marketing Automation', 'Lead Generation Funnels']
    },
    {
      icon: 'bx-search-alt',
      title: 'SEO & Content Marketing',
      description: 'Rank higher on Google and attract organic traffic with our proven SEO strategies and quality content.',
      features: ['On-Page & Off-Page SEO', 'Content Strategy', 'Local SEO']
    },
    {
      icon: 'bx-target-lock',
      title: 'Paid Advertising',
      description: 'ROI-focused paid campaigns on Google, Facebook, Instagram and other platforms to maximize your ad spend.',
      features: ['Google Ads', 'Facebook & Instagram Ads', 'LinkedIn Ads']
    },
    {
      icon: 'bx-cloud',
      title: 'SaaS Development',
      description: 'Build scalable software-as-a-service products from idea to launch with ongoing support and maintenance.',
      features: ['Custom SaaS Platforms', 'API Development', 'Cloud Solutions']
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">Comprehensive digital solutions for your business growth</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={`bx ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
