import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  return (
    <div className="hero-container">
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <div className="logo-icon">
              <span className="logo-letter">A</span>
            </div>
            <span className="logo-text">cqicodePro Inc.</span>
          </div>
          
          <ul className="nav-menu">
            <li className="nav-item active">HOME</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Why Choose Us</li>
            <li className="nav-item">Portfolio</li>
            <li className="nav-item">Products</li>
            <li className="nav-item">Testimonial</li>
            <li className="nav-item">Technologies</li>
            <li className="nav-item">Contact</li>
          </ul>

          <a href="tel:+18008368018" className="phone-button">
            <span className="phone-icon">📞</span>
            +1 (800) 836-8018
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-wrapper">
          {/* Left Side - Phone Mockup */}
          <div className="phone-mockup-container">
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                {/* Daily List Screen */}
                <div className="app-screen">
                  <div className="app-header">
                    <h3>Daily List</h3>
                  </div>
                  <div className="app-calendar">
                    <div className="calendar-header">
                      <span>Oct</span>
                    </div>
                    <div className="calendar-dates">
                      <div className="date-item">20</div>
                      <div className="date-item active">21</div>
                      <div className="date-item">22</div>
                    </div>
                  </div>
                  <div className="task-section">
                    <div className="task-card">
                      <h4>Daily Standup</h4>
                      <div className="task-icons">
                        <span className="icon">👤</span>
                        <span className="icon">👤</span>
                        <span className="icon">👤</span>
                      </div>
                    </div>
                    <div className="task-card">
                      <h4>Research Session</h4>
                      <div className="task-icons">
                        <span className="icon">👤</span>
                        <span className="icon">👤</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Screens */}
              <div className="side-screen schedule-screen">
                <div className="screen-header">Schedule</div>
              </div>
              <div className="side-screen calendar-screen">
                <div className="screen-header">Calendar</div>
                <div className="mini-calendar">
                  <div className="cal-grid"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="hero-text-content">
            <h1 className="hero-title">
              Leading the Way in App Development Innovation
            </h1>
            <p className="hero-subtitle">
              We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.
            </p>
            <button className="cta-button">GET A FREE QUOTE</button>
            
            {/* Slider Navigation */}
            <div className="slider-controls">
              <button 
                className="slider-arrow prev" 
                onClick={handlePrevSlide}
                aria-label="Previous slide"
              >
                ←
              </button>
              <button 
                className="slider-arrow next" 
                onClick={handleNextSlide}
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Background */}
      <div className="wave-background"></div>
    </div>
  );
};

export default HeroSection;
