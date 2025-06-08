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
  {
    name: 'João Oliveira',
    text: 'Precisava de ajuda com meu pet e encontrei um ótimo profissional. Super atencioso e cuidadoso!'
  },
  {
    name: 'Mariana Santos',
    text: 'O serviço de software resolveu meu problema rapidamente. Profissionais muito capacitados.'
  },
  {
    name: 'Pedro Costa',
    text: 'Encontrei um mecânico excelente para meu carro. Preço justo e trabalho de qualidade!'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <motion.h2 
        className="text-3xl font-bold text-center text-black dark:text-white mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Depoimentos
      </motion.h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        {testimonials.map((item, index) => (
          <motion.div 
            key={index} 
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          >
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{item.text}"</p>
            <p className="font-semibold text-yellow-douhelp">- {item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

