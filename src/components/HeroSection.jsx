import React from 'react';
import DouUmHelpLogo from '../assets/logo.png';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center px-6 py-20">
      <motion.img 
        src={DouUmHelpLogo} 
        alt="Dou Um Help Logo" 
        className="w-40 md:w-52 mb-6" 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-yellow-douhelp mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Dou Um Help
      </motion.h1>
      <motion.p 
        className="text-gray-input text-lg md:text-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Ajudando você com serviços locais e maridos de aluguel de confiança!
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <a href="#cta" className="bg-yellow-douhelp hover:bg-yellow-douhelp-light text-black font-semibold py-3 px-8 rounded-full transition">
          Peça seu Help!
        </a>
        <a href="https://prestador.douumhelp.com/" className="border-2 border-yellow-douhelp hover:bg-yellow-douhelp-light text-yellow-douhelp hover:text-black font-semibold py-3 px-8 rounded-full transition">
          Acessar como Prestador
        </a>
      </motion.div>
    </section>
  );
};
