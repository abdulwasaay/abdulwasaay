import React from 'react';
import './Hero.css';

export interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  phoneImageLeftSrc?: string;
  phoneImageRightSrc?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title = 'Leading the Way in App',
  subtitle = 'Development Innovation',
  description =
    'We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.',
  ctaLabel = 'GET A FREE QUOTE',
  onCtaClick,
  phoneImageLeftSrc,
  phoneImageRightSrc,
}) => {
  return (
    <section className="hero-root" aria-labelledby="hero-heading">
      <div className="hero-bg"></div>

      <div className="hero-content">
        <div className="hero-phones" aria-hidden>
          <div className="phone phone-left">
            {phoneImageLeftSrc ? (
              <img src={phoneImageLeftSrc} alt="App schedule preview" />
            ) : (
              <div className="phone-fallback">
                <div className="screen">
                  <div className="top-bar" />
                  <div className="list">
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="phone phone-right">
            {phoneImageRightSrc ? (
              <img src={phoneImageRightSrc} alt="Daily list preview" />
            ) : (
              <div className="phone-fallback">
                <div className="screen light">
                  <div className="list grid">
                    <div className="tile" />
                    <div className="tile" />
                    <div className="tile" />
                    <div className="tile wide" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hero-text">
          <h1 id="hero-heading" className="hero-title">
            <span className="hero-title-strong">{title}</span>
            <br />
            <span className="hero-title-accent">{subtitle}</span>
          </h1>
          <p className="hero-desc">{description}</p>
          <div className="hero-cta">
            <button className="cta-button" onClick={onCtaClick}>
              {ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
