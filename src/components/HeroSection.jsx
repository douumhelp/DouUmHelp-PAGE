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
    <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div 
        className="flex flex-col items-center justify-center space-y-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          src={isDarkMode ? DouUmHelpLogoDark : DouUmHelpLogo}
          alt="Dou Um Help Logo" 
          className="w-48 md:w-64 lg:w-72 mb-8" 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-yellow-douhelp mb-6 dark:text-yellow-douhelp text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Dou Um Help
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 text-center max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Ajudando você com serviços locais e maridos de aluguel de confiança!
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button 
            onClick={handleDownloadApp}
            className="bg-yellow-douhelp hover:bg-yellow-douhelp-light text-black dark:text-gray-900 font-semibold py-4 px-12 rounded-full transition inline-flex items-center justify-center text-lg md:text-xl transform hover:scale-105"
          >
            <Download className="w-6 h-6 mr-3" />
            Peça seu Help!
          </button>
          <a 
            href="https://prestador.douumhelp.com/" 
            className="border-2 border-yellow-douhelp hover:bg-yellow-douhelp-light text-yellow-douhelp hover:text-black dark:hover:text-gray-900 font-semibold py-4 px-12 rounded-full transition dark:text-yellow-douhelp text-lg md:text-xl transform hover:scale-105"
          >
            Acessar como Prestador
          </a>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Disponível para Android e iOS em breve
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
