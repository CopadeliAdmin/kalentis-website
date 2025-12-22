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
      image: "https://lh3.googleusercontent.com/d/1RifXinGrrfH3Z3q0Y-vU94xp4YiTkaOR",
      duration: "24h réparties sur 3 mois",
      target: "Particuliers & Salariés"
    },
    {
      title: "Formation Management",
      description: "Développez vos compétences managériales et optimisez la performance de vos équipes commerciales.",
      features: ["Leadership situationnel", "Gestion d'équipe", "Motivation commerciale", "Pilotage de la performance"],
      image: "https://lh3.googleusercontent.com/d/1TA-wUvhBtgYCDvQF_hDILTxGKo7SwWWi",
      duration: "2 à 5 jours",
      target: "Managers & Cadres"
    },
    {
      title: "Formation Commerciale",
      description: "Techniques de vente avancées et stratégies pour maximiser vos résultats commerciaux.",
      features: ["Prospection efficace", "Négociation commerciale", "Closing techniques", "Fidélisation client"],
      image: "https://customer-assets.emergentagent.com/job_managesales/artifacts/czvf6qx0_FC.jpg",
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
      </div>
    </section>
  );
};

export default Services;