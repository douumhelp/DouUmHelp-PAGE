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
import DevelopersSection from './components/DevelopersSection';
import NavSections from './components/NavSections';

const HomePage = () => {
  return (
    <div className="relative">
      <section id="inicio" className="min-h-screen flex items-center justify-center">
        <HeroSection />
      </section>

      <section id="sobre" className="min-h-screen flex items-center justify-center py-20">
        <AboutSection />
      </section>

      <section id="servicos" className="min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-gray-800">
        <ServicesSection />
      </section>

      <section id="vantagens" className="min-h-screen flex items-center justify-center py-20">
        <AdvantagesSection />
      </section>

      <section id="recursos" className="min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-gray-800">
        <FeaturesSection />
      </section>

      <section id="depoimentos" className="min-h-screen flex items-center justify-center py-20">
        <TestimonialsSection />
      </section>

      <section id="desenvolvedores" className="min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-gray-800">
        <DevelopersSection />
      </section>

      <section id="contato" className="min-h-screen flex items-center justify-center py-20">
        <CTASection />
      </section>

      <NavSections />
    </div>
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
