import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Founder, TechStart India",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Web4You transformed our online presence completely. Their AI-powered marketing strategies increased our leads by 300% in just 3 months. Highly recommended for any business looking to grow!",
    location: "Mumbai, India"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "CEO, Fashion Hub",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "The team at Web4You is exceptional! They designed a beautiful website for our fashion brand and their SEO work has put us on the first page of Google. Our sales have doubled!",
    location: "Delhi, India"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Director, HealthCare Plus",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
    text: "Professional, responsive, and results-driven. Web4You delivered our hospital management app on time and within budget. Their ongoing support is fantastic. 5 stars!",
    location: "Bangalore, India"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Owner, Spice Kitchen",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "As a restaurant owner, I needed someone who understood local business. Web4You's Google Ads campaign brought in so many new customers. Best investment we ever made!",
    location: "Hyderabad, India"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "MD, BuildRight Construction",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    text: "Web4You built our company website and handles all our digital marketing. Their team is always available and the results speak for themselves. Truly a partner in our growth!",
    location: "Pune, India"
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i key={i} className={`bx ${i < rating ? 'bxs-star' : 'bx-star'}`}></i>
    ));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our happy clients have to say about working with us.
          </p>
        </div>

        <div className="testimonials-wrapper">
          <button className="testimonial-nav prev" onClick={prevSlide} aria-label="Previous testimonial">
            <i className='bx bx-chevron-left'></i>
          </button>

          <div className="testimonials-slider">
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-quote">
                      <i className='bx bxs-quote-left'></i>
                    </div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                    <div className="testimonial-author">
                      <img src={testimonial.image} alt={testimonial.name} />
                      <div className="author-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.role}</p>
                        <span className="author-location">
                          <i className='bx bx-map'></i> {testimonial.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="testimonial-nav next" onClick={nextSlide} aria-label="Next testimonial">
            <i className='bx bx-chevron-right'></i>
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="trust-badges">
          <div className="trust-badge">
            <i className='bx bx-check-shield'></i>
            <span>500+ Happy Clients</span>
          </div>
          <div className="trust-badge">
            <i className='bx bx-star'></i>
            <span>4.9/5 Average Rating</span>
          </div>
          <div className="trust-badge">
            <i className='bx bx-globe'></i>
            <span>Pan India Service</span>
          </div>
        </div>

        {/* Google Reviews Badge */}
        <div className="google-review-wrapper">
          <a
            href="https://g.page/r/CdkujnmwTewJEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="google-review-badge"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              width="24"
            />
            <div className="review-stars">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
            </div>
            <span className="review-text">4.9 (120+ Reviews)</span>
            <span className="review-cta">Leave a Review</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
