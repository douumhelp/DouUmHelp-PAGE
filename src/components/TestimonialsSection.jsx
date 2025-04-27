import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Maria Souza',
    text: 'Ótimo serviço, rápido e muito profissional! Recomendo demais.',
  },
  {
    name: 'Carlos Silva',
    text: 'Chamei pelo app e em minutos já tinha um prestador na minha casa. Excelente!',
  },
  {
    name: 'Ana Paula',
    text: 'Fiquei impressionada com a agilidade e educação dos prestadores!'
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <motion.h2 
        className="text-3xl font-bold text-center text-black mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Depoimentos
      </motion.h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {testimonials.map((item, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 rounded-2xl shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <p className="text-gray-600 italic">"{item.text}"</p>
            <p className="mt-4 font-semibold text-yellow-500">- {item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

