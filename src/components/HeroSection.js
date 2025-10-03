import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Leading the Way in App Development Innovation",
      subtitle: "We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level."
    },
    {
      title: "Custom Mobile Solutions for Your Business",
      subtitle: "Transform your ideas into powerful mobile applications with our expert development team."
    },
    {
      title: "Next-Generation App Development",
      subtitle: "Experience cutting-edge technology and innovative design in every app we create."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-section">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">AppCoders Inc.</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#why-choose">Why Choose Us</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="contact-phone">
            <span>📞 +1 (800) 836-8018</span>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <div className="content-container">
          <div className="text-content">
            <h1 className="hero-title">{slides[currentSlide].title}</h1>
            <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
            <button className="cta-button">GET A FREE QUOTE</button>
          </div>
          
          <div className="phone-showcase">
            <div className="phone-container">
              <div className="phone">
                <div className="phone-screen">
                  <div className="app-header">
                    <div className="status-bar">
                      <span className="time">9:41</span>
                      <div className="status-icons">
                        <span className="signal">📶</span>
                        <span className="wifi">📶</span>
                        <span className="battery">🔋</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="app-content">
                    <div className="app-title">Daily List</div>
                    <div className="date-section">
                      <span className="day">16</span>
                      <span className="month">Oct</span>
                    </div>
                    
                    <div className="schedule-section">
                      <h3>Schedule</h3>
                      <div className="task-item">
                        <div className="task-time">08:30</div>
                        <div className="task-details">
                          <div className="task-title">Daily Standup</div>
                          <div className="task-subtitle">Team meeting</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="research-section">
                      <h3>Research Session</h3>
                      <div className="research-item">
                        <div className="research-time">10:00 - 11:00</div>
                        <div className="research-title">UX Research</div>
                      </div>
                    </div>
                    
                    <div className="calendar-section">
                      <h3>Calendar</h3>
                      <div className="calendar-grid">
                        <div className="calendar-day">M</div>
                        <div className="calendar-day">T</div>
                        <div className="calendar-day active">W</div>
                        <div className="calendar-day">T</div>
                        <div className="calendar-day">F</div>
                        <div className="calendar-day">S</div>
                        <div className="calendar-day">S</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="navigation-arrows">
          <button className="nav-arrow prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="nav-arrow next" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;