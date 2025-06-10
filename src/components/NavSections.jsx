import React from 'react';

const NavSections = () => {
  const sections = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'vantagens', label: 'Vantagens' },
    { id: 'recursos', label: 'Recursos' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'desenvolvedores', label: 'Desenvolvedores' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white dark:bg-gray-800 rounded-full shadow-lg px-4 py-2">
      <div className="flex space-x-2 overflow-x-auto max-w-[90vw] scrollbar-hide">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap transition-colors duration-200"
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavSections; 