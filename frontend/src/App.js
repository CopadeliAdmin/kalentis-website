import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;