import React from 'react';
import { motion } from 'framer-motion';

export default function CTASection () {
  return (
    <section className="px-6 py-16 bg-white text-gray-700 text-center">
      <motion.h2 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Baixe nosso app ou entre em contato!
      </motion.h2>
      <motion.p 
        className="mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Tenha ajuda de um profissional qualificado de forma rápida e fácil.
      </motion.p>
      <motion.button 
        className="bg-yellow-douhelp hover:bg-yellow-douhelp-light text-black font-semibold py-3 px-8 rounded-full transition"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Falar com a Gente!
      </motion.button>
    </section>
  );
}

