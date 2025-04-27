import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="px-6 py-16 bg-gray-100 text-gray-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
        <p>
          Somos a plataforma número 1 de prestação de serviços rápidos e de confiança na sua região.
          Desde pequenos reparos até grandes instalações, o Dou Um Help conecta você a profissionais qualificados!
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
