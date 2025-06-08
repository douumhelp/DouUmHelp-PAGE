import React, { useEffect, useState } from 'react';
import DouUmHelpLogo from '../assets/logo.png';
import DouUmHelpLogoDark from '../assets/logo-dark.png';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function HeroSection() {
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

  const handleDownloadApp = () => {
    // O caminho começa com / porque é relativo à pasta public
    const apkUrl = '/app/douumhelp.apk';
    
    // Criando um link temporário para download
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 'DouUmHelp.apk'; // Nome do arquivo que será baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="flex flex-col items-center justify-center text-center px-6 py-20 dark:bg-gray-900">
      <motion.img 
        src={isDarkMode ? DouUmHelpLogoDark : DouUmHelpLogo}
        alt="Dou Um Help Logo" 
        className="w-40 md:w-52 mb-6" 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-yellow-douhelp mb-4 dark:text-yellow-douhelp"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Dou Um Help
      </motion.h1>
      <motion.p 
        className="text-gray-input dark:text-gray-300 text-lg md:text-xl mb-6"
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
        <button 
          onClick={handleDownloadApp}
          className="bg-yellow-douhelp hover:bg-yellow-douhelp-light text-black dark:text-gray-900 font-semibold py-3 px-8 rounded-full transition inline-flex items-center justify-center"
        >
          <Download className="w-5 h-5 mr-2" />
          Peça seu Help!
        </button>
        <a href="https://prestador.douumhelp.com/" className="border-2 border-yellow-douhelp hover:bg-yellow-douhelp-light text-yellow-douhelp hover:text-black dark:hover:text-gray-900 font-semibold py-3 px-8 rounded-full transition dark:text-yellow-douhelp">
          Acessar como Prestador
        </a>
      </motion.div>
    </section>
  );
};
