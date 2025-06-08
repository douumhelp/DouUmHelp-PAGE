import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import AdvantagesSection from './components/AdvantagesSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection'; 
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { Documentation } from './components/Documentation';
import ThemeToggle from './components/ThemeToggle';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AdvantagesSection />
      <FeaturesSection /> 
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 font-outfit scroll-smooth min-h-screen transition-colors duration-200">
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/documentacao" element={<Documentation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
