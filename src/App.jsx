import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import AdvantagesSection from './components/AdvantagesSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection'; 
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white font-outfit scroll-smooth">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AdvantagesSection />
      <FeaturesSection /> 
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
