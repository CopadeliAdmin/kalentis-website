import React, { useState, useEffect } from 'react';

const Testimonials = () => {
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

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Marie Lefebvre",
      role: "Directrice Commerciale",
      company: "TechSolutions",
      image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2",
      text: "La formation management de Kalentis a transformé ma façon d'encadrer mon équipe. Les outils concrets et l'accompagnement personnalisé ont permis d'améliorer nos performances de 35%."
    },
    {
      name: "Jean-Pierre Moreau",
      role: "Commercial Senior",
      company: "Particulier",
      image: "https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg",
      text: "Mon bilan de compétences avec Kalentis m'a permis de clarifier mes objectifs professionnels et de réussir ma transition vers un poste de manager. Un accompagnement de qualité !"
    },
    {
      name: "Sophie Dubois",
      role: "DRH",
      company: "Innov'PME",
      image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2",
      text: "Nous faisons confiance à Kalentis pour former nos équipes commerciales. Leur expertise et leur approche pédagogique font la différence. Nos commerciaux sont plus performants et motivés."
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className={`testimonials-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">Témoignages</h2>
          <p className="section-subtitle">
            Découvrez les retours d'expérience de nos clients
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <h3>Prêt à développer vos compétences ?</h3>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="cta-primary">
            Contactez-nous
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;