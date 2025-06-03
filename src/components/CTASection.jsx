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
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <motion.a
          href="https://wa.me/5544998667449?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-douhelp hover:bg-yellow-douhelp-light text-black font-semibold py-3 px-8 rounded-full transition"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Falar com a Gente!
        </motion.a>

        <motion.a
        href="https://wa.me/5544998667449?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços!"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-douhelp hover:bg-yellow-douhelp-light text-black font-semibold py-3 px-8 rounded-full transition"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
          Documentação
        </motion.a>
      </div>
    </section>
  );
}

