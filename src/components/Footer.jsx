import React from 'react';
import DouUmHelpLogo from '/../assets/DouUmHelpLogo.png'; 

const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between px-6">
      <img src={DouUmHelpLogo} alt="Logo Dou Um Help" className="w-24 mb-4 md:mb-0" />
      <p className="text-gray-500 text-sm">© 2025 Dou Um Help. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
