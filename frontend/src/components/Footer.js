import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Logo />
            <p className="footer-description">
              Organisme de formation certifié Qualiopi spécialisé dans le développement des compétences commerciales et managériales.
            </p>
            <div className="footer-certifications">
              <span className="certification-badge">Certifié Qualiopi</span>
              <span className="certification-badge">CPF Eligible</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Bilan de compétences</a></li>
              <li><a href="#services">Formation Management</a></li>
              <li><a href="#services">Formation Commerciale</a></li>
              <li><a href="#contact">Formations sur-mesure</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>À propos</h4>
            <ul className="footer-links">
              <li><a href="#about">Notre équipe</a></li>
              <li><a href="#testimonials">Témoignages</a></li>
              <li><a href="#contact">Nos locaux</a></li>
              <li><a href="#contact">Certification Qualiopi</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="footer-contact">
              <p><strong>Email:</strong> contact@kalentis.fr</p>
              <p><strong>Téléphone:</strong> 07 56 88 75 21</p>
              <p><strong>Adresse:</strong> 61 rue de Lyon</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; 2024 Kalentis. Tous droits réservés.</p>
            <div className="legal-links">
              <a href="#" className="legal-link">Mentions légales</a>
              <a href="#" className="legal-link">Politique de confidentialité</a>
              <a href="#" className="legal-link">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;