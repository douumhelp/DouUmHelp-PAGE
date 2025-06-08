import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdvantagesSection () {
  const advantages = [
    "Profissionais experientes",
    "Atendimento rápido",
    "Serviço de qualidade",
    "Preços acessíveis",
  ];

  return (
    <section className="px-6 py-20 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-14 text-yellow-douhelp">
          Vantagens de usar o Dou Um Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-gray-50 dark:bg-gray-800 p-6 rounded-3xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex-shrink-0">
                <Check className="w-8 h-8 text-yellow-douhelp" />
              </div>
              <span className="ml-4 text-lg font-semibold text-gray-600 dark:text-gray-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
