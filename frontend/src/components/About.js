import React, { useState, useEffect } from 'react';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "200+", label: "Professionnels formés" },
    { number: "20+", label: "Années d'expérience" },
    { number: "97%", label: "Taux de satisfaction" },
    { number: "90+", label: "Entreprises accompagnées" }
  ];

  const team = [
    {
      name: "Dimbongo DIMBOUNJE",
      role: "Directeur, Formateur, Praticien",
      image: "https://images.pexels.com/photos/2451566/pexels-photo-2451566.jpeg",
      expertise: "Management commercial, Leadership, Bilan de Compétences"
    },
    {
      name: "Christophe SAKSA",
      role: "Psychologue du travail & Formateur",
      image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg",
      expertise: "Bilan de compétences, Coaching"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className={`about-content ${isVisible ? 'animate-in' : ''}`}>
          <div className="about-text">
            <h2 className="section-title">À Propos de Kalentis</h2>
            <p className="about-description">
              Kalentis accompagne les professionnels et les entreprises dans leur développement de compétences. 
              Notre équipe d'experts certifiés vous propose des formations personnalisées et des bilans de compétences 
              adaptés à vos besoins spécifiques.
            </p>
            <p className="about-description">
              Spécialisés dans le management commercial et les techniques de vente, nous intervenons auprès de PME, 
              grands groupes et particuliers pour optimiser les performances et révéler les potentiels.
            </p>
          </div>
          
          <div className="about-image">
            <img src="https://images.pexels.com/photos/2451566/pexels-photo-2451566.jpeg" alt="Bureau moderne Kalentis" />
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className={`stat-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="team-section">
          <h3 className="team-title">Notre Équipe</h3>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className={`team-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role">{member.role}</p>
                  <p className="team-expertise">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;