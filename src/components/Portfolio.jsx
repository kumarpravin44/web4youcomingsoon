import React from 'react';

function Portfolio() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      category: 'E-commerce',
      title: 'Fashion Store',
      description: 'Complete e-commerce solution with payment integration'
    },
    {
      image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&q=80',
      category: 'Mobile App',
      title: 'Fitness Tracker',
      description: 'iOS & Android app with AI-powered workout plans'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      category: 'SaaS',
      title: 'CRM Platform',
      description: 'Custom CRM for real estate business management'
    },
    {
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80',
      category: 'Marketing',
      title: 'Lead Gen Campaign',
      description: 'Generated 500+ leads in 30 days for coaching institute'
    },
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      category: 'Website',
      title: 'Restaurant Website',
      description: 'Modern website with online ordering system'
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      category: 'SEO',
      title: 'Healthcare Clinic',
      description: 'Ranked #1 on Google for 50+ keywords'
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">Our Recent Work</h2>
          <p className="section-subtitle">Check out some of our successful projects</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <span className="portfolio-category">{project.category}</span>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
