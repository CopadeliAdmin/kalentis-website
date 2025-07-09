import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4" 
          alt="Formation professionnelle" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <nav className="nav-bar">
        <div className="nav-container">
          <Logo />
          <div className="nav-links">
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">À propos</a>
            <a href="#testimonials" className="nav-link">Témoignages</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
          <h1 className="hero-title">
            Développez le <span className="highlight">potentiel</span> de vos équipes
          </h1>
          <p className="hero-subtitle">
            Organisme de formation certifié Qualiopi spécialisé dans le management commercial et les bilans de compétences. Accompagnez vos collaborateurs vers l'excellence.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToContact} className="cta-primary">
              Demander un devis
            </button>
            <button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} className="cta-secondary">
              Découvrir nos services
            </button>
          </div>
          <div className="hero-badges">
            <div className="badge">
              <span className="badge-icon">✓</span>
              <span>Certifié Qualiopi</span>
            </div>
            <div className="badge">
              <span className="badge-icon">✓</span>
              <span>Financement CPF</span>
            </div>
            <div className="badge">
              <span className="badge-icon">✓</span>
              <span>Experts certifiés</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;