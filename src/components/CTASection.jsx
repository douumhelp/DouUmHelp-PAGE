import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DouUmHelpLogo from '../assets/logo.png';
import DouUmHelpLogoDark from '../assets/logo-dark.png';

export default function CTASection () {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verificar o modo escuro inicial
    const darkModeEnabled = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkModeEnabled);

    // Observar mudanças no modo escuro
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const darkModeEnabled = document.documentElement.classList.contains('dark');
          setIsDarkMode(darkModeEnabled);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 py-16 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-center">
      <motion.div
        className="flex flex-col items-center justify-center space-y-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          src={isDarkMode ? DouUmHelpLogoDark : DouUmHelpLogo}
          alt="Dou Um Help Logo" 
          className="w-48 md:w-60 lg:w-72 mb-8" 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.h2 
          className="text-3xl font-bold mb-4 dark:text-white"
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
            className="bg-yellow-douhelp hover:bg-yellow-douhelp-light text-black dark:text-gray-900 font-semibold py-3 px-8 rounded-full transition"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Falar com a Gente!
          </motion.a>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/documentacao"
              className="bg-yellow-douhelp hover:bg-yellow-douhelp-light text-black dark:text-gray-900 font-semibold py-3 px-8 rounded-full transition inline-block"
            >
              Documentação
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

