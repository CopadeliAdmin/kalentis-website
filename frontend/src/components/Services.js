import React, { useState, useEffect } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Bilan de Compétences",
      description: "Accompagnement personnalisé pour faire le point sur vos compétences, motivations et projet professionnel.",
      features: ["Entretiens individuels", "Tests d'aptitudes", "Plan d'action personnalisé", "Suivi post-bilan"],
      image: "/images/bc-consultation.jpg",
      duration: "24h réparties sur 3 mois",
      target: "Particuliers & Salariés"
    },
    {
      title: "Formation Management",
      description: "Développez vos compétences managériales et optimisez la performance de vos équipes commerciales.",
      features: ["Leadership situationnel", "Gestion d'équipe", "Motivation commerciale", "Pilotage de la performance"],
      image: "/images/fm-team-meeting.jpg",
      duration: "2 à 5 jours",
      target: "Managers & Cadres"
    },
    {
      title: "Formation Commerciale",
      description: "Techniques de vente avancées et stratégies pour maximiser vos résultats commerciaux.",
      features: ["Prospection efficace", "Négociation commerciale", "Closing techniques", "Fidélisation client"],
      image: "/images/fc-business-meeting.jpg",
      duration: "1 à 3 jours",
      target: "Équipes commerciales"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className={`services-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">
            Des formations sur-mesure pour développer vos compétences et celles de vos équipes
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <div className="service-badge">{service.target}</div>
                </div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="service-info">
                  <div className="service-duration">
                    <span className="info-label">Durée:</span>
                    <span className="info-value">{service.duration}</span>
                  </div>
                </div>
                
                <button onClick={scrollToContact} className="service-cta">
                  Demander un devis
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="qualiopi-section">
          <div className="qualiopi-card">
            <div className="qualiopi-icon">
              {/* Logo Qualiopi officiel */}
              <div className="qualiopi-logo">
                <svg viewBox="0 0 300 120" className="qualiopi-svg">
                  {/* Fond blanc */}
                  <rect width="300" height="120" fill="white" rx="8"/>
                  
                  {/* Texte Qualiopi */}
                  <text x="20" y="40" className="qualiopi-text-main" fill="#2B2B6B" fontSize="28" fontWeight="bold">Qualiopi</text>
                  
                  {/* Flèches rouges et bleues */}
                  <g transform="translate(200, 20)">
                    <path d="M0 0 L20 0 L10 20 Z" fill="#E31E24"/>
                    <path d="M20 0 L40 0 L30 20 Z" fill="#2B2B6B"/>
                  </g>
                  
                  {/* Processus certifié */}
                  <text x="20" y="65" className="qualiopi-text-sub" fill="#2B2B6B" fontSize="14">processus certifié</text>
                  
                  {/* République Française */}
                  <g transform="translate(20, 80)">
                    <rect x="0" y="0" width="8" height="12" fill="#0055A4"/>
                    <rect x="8" y="0" width="8" height="12" fill="white"/>
                    <rect x="16" y="0" width="8" height="12" fill="#EF4135"/>
                    <text x="30" y="10" className="qualiopi-text-rf" fill="#2B2B6B" fontSize="12" fontWeight="bold">RÉPUBLIQUE FRANÇAISE</text>
                  </g>
                </svg>
              </div>
            </div>
            <div className="qualiopi-content">
              <h3>Certification Qualiopi</h3>
              <p>Notre organisme est certifié Qualiopi, garantissant la qualité de nos formations et leur éligibilité aux financements CPF, OPCO et Pôle Emploi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;