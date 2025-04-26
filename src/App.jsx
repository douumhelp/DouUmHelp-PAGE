import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import AdvantagesSection from './components/AdvantagesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white font-outfit">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AdvantagesSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
