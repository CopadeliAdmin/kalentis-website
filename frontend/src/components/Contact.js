import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérification des champs obligatoires
    if (!formData.name || !formData.email || !formData.message) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    
    // Simulation d'envoi - vous pourrez connecter un vrai système plus tard
    alert('Votre message a été envoyé avec succès ! Nous vous contacterons sous 24h.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 4l9 6.5L21 4v16H3V4zm0 2v12h18V6l-9 6.5L3 6z"/>
        </svg>
      ),
      title: "Email",
      value: "contact@kalentis.fr",
      link: "mailto:contact@kalentis.fr"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      title: "Téléphone",
      value: "07 56 88 75 21",
      link: "tel:0756887521"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: "Adresse",
      value: "61 rue de Lyon",
      link: "https://maps.google.com/?q=61+rue+de+Lyon"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className={`contact-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-subtitle">
            Discutons de vos besoins en formation et développement des compétences
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-image">
              <img src="https://lh3.googleusercontent.com/d/1phWCPignlkoRdK5qs4dvCxqbGzPMSgXE" alt="Contactez Kalentis" />
            </div>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className={`contact-item ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <a href={info.link} className="contact-link">{info.value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className={`contact-form ${isVisible ? 'animate-in' : ''}`}>
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Entreprise</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service souhaité</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="bilan">Bilan de compétences</option>
                  <option value="management">Formation Management</option>
                  <option value="commercial">Formation Commerciale</option>
                  <option value="sur-mesure">Formation sur-mesure</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="form-textarea"
                  placeholder="Décrivez votre projet ou vos besoins..."
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;