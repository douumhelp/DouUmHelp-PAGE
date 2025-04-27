import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection () {
  return (
    <section id="about" className="bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-8 text-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Sobre Nós
        </motion.h2>
        <motion.p 
          className="text-gray-700 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          No Dou Um Help, conectamos pessoas que precisam de uma ajuda presencial — como instalar, montar ou consertar algo — a profissionais confiáveis prontos para atender rapidamente. 
          Nossa missão é tornar seu dia a dia mais prático, seguro e tranquilo.
        </motion.p>
      </div>
    </section>
  );
};
