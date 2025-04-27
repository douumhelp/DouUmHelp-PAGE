import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'Ajuda Imediata',
    description: 'Encontre rapidamente profissionais qualificados para resolver tarefas presenciais no seu dia a dia.',
  },
  {
    title: 'Profissionais Confiáveis',
    description: 'Todos os helpers passam por um processo de verificação para garantir sua segurança e confiança.',
  },
  {
    title: 'Facilidade na Contratação',
    description: 'Solicite ajuda de forma prática e rápida pelo app, sem complicações.',
  },
];

export default function FeaturesSection () {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-12 text-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Por que escolher o Dou Um Help?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <CheckCircle className="text-yellow-400 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold text-black mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
