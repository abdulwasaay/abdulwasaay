import React from 'react';
import './HeroBanner.css';

export type TitleSegment = { text: string; highlight?: boolean };

export interface HeroBannerProps {
  logoText?: string;
  nav?: string[];
  phone?: { label: string; href: string };
  title: TitleSegment[];
  subtitle: string;
  cta?: { label: string; href: string };
  mockupImages?: { primary?: string; secondary?: string };
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  logoText = 'Appicoders Inc.',
  nav = [],
  phone,
  title,
  subtitle,
  cta,
  mockupImages,
}) => {
  return (
    <header className="hero">
      <div className="container hero__inner">
        <div className="hero__phones">
          <div className="phone phone--secondary">
            {mockupImages?.secondary ? (
              <img src={mockupImages.secondary} alt="Phone secondary" />
            ) : (
              <div className="phone__placeholder" />
            )}
          </div>
          <div className="phone phone--primary">
            {mockupImages?.primary ? (
              <img src={mockupImages.primary} alt="Phone primary" />
            ) : (
              <div className="phone__placeholder" />
            )}
          </div>
        </div>

        <div className="hero__content">
          <div className="hero__topbar">
            <div className="logo">{logoText}</div>
            {nav.length > 0 && (
              <nav className="nav">
                {nav.map((item) => (
                  <a key={item} href="#" className="nav__link">{item}</a>
                ))}
              </nav>
            )}
            {phone && (
              <a className="phone-badge" href={phone.href}>
                <span>📞</span>
                <span>{phone.label}</span>
              </a>
            )}
          </div>

          <h1 className="hero__title">
            {title.map((seg, idx) => (
              <span key={idx} className={seg.highlight ? 'highlight' : undefined}>
                {seg.text}{' '}
              </span>
            ))}
          </h1>
          <p className="hero__subtitle">{subtitle}</p>
          {cta && (
            <div className="hero__actions">
              <a className="btn-cta" href={cta.href}>{cta.label}</a>
            </div>
          )}

          <div className="hero__arrows">
            <button aria-label="Previous" className="arrow">◀</button>
            <button aria-label="Next" className="arrow">▶</button>
          </div>
        </div>
      </div>

      <div className="hero__shapes">
        <div className="shape shape--1" />
        <div className="shape shape--2" />
      </div>
    </header>
  );
};
