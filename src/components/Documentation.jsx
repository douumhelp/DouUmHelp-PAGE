import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import DouUmHelpLogo from '../assets/logo.png';
import DouUmHelpLogoDark from '../assets/logo-dark.png';

export function Documentation() {
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

  const handleDownloadDocs = () => {
    // O caminho começa com / porque é relativo à pasta public
    const docsUrl = '/docs/DouUmHelp-Documentacao.pdf';
    
    // Criando um link temporário para download
    const link = document.createElement('a');
    link.href = docsUrl;
    link.download = 'DouUmHelp-Documentacao.pdf'; // Nome do arquivo que será baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadDiagram = () => {
    // O caminho começa com / porque é relativo à pasta public
    const diagramUrl = '/docs/DouUmHelp-Diagrama.pdf';
    
    // Criando um link temporário para download
    const link = document.createElement('a');
    link.href = diagramUrl;
    link.download = 'DouUmHelp-Diagrama.pdf'; // Nome do arquivo que será baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.img 
            src={isDarkMode ? DouUmHelpLogoDark : DouUmHelpLogo}
            alt="Dou Um Help Logo" 
            className="w-40 md:w-52 mx-auto mb-8" 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Documentação
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Acesse nossa documentação completa e diagramas do projeto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Documentação Técnica
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Download completo da documentação do projeto, incluindo guias de uso e especificações técnicas.
            </p>
            <button
              onClick={handleDownloadDocs}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar Documentação
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Diagramas
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Acesse os diagramas de arquitetura e fluxos do sistema.
            </p>
            <button
              onClick={handleDownloadDiagram}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar Diagramas
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 