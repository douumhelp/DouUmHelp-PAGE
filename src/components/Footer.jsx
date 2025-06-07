import React from 'react';
import { motion } from 'framer-motion';
import SocialMediaSection from './SocialMediaSection';

export default function Footer() {
  return (
    <motion.footer 
      className="bg-white py-6 border-t border-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <SocialMediaSection />
      <p className="text-gray-500 text-sm text-center">© 2025 Dou Um Help. Todos os direitos reservados.</p>
    </motion.footer>
  );
};
