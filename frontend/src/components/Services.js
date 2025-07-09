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
      image: "https://images.pexels.com/photos/7579190/pexels-photo-7579190.jpeg",
      duration: "24h réparties sur 3 mois",
      target: "Particuliers & Salariés"
    },
    {
      title: "Formation Management",
      description: "Développez vos compétences managériales et optimisez la performance de vos équipes commerciales.",
      features: ["Leadership situationnel", "Gestion d'équipe", "Motivation commerciale", "Pilotage de la performance"],
      image: "https://images.pexels.com/photos/9034724/pexels-photo-9034724.jpeg",
      duration: "2 à 5 jours",
      target: "Managers & Cadres"
    },
    {
      title: "Formation Commerciale",
      description: "Techniques de vente avancées et stratégies pour maximiser vos résultats commerciaux.",
      features: ["Prospection efficace", "Négociation commerciale", "Closing techniques", "Fidélisation client"],
      image: "https://images.pexels.com/photos/7647920/pexels-photo-7647920.jpeg",
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
              {/* Logo Qualiopi simplifié */}
              <div className="qualiopi-logo">
                <svg viewBox="0 0 120 120" className="qualiopi-svg">
                  <circle cx="60" cy="60" r="50" fill="#2563eb" stroke="#1e40af" strokeWidth="3"/>
                  <circle cx="60" cy="60" r="35" fill="none" stroke="white" strokeWidth="2"/>
                  <text x="60" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">QUALIOPI</text>
                  <text x="60" y="65" textAnchor="middle" fill="white" fontSize="10">CERTIFIÉ</text>
                  <text x="60" y="80" textAnchor="middle" fill="white" fontSize="8">RF 2024</text>
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