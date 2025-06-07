import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection () {
  return (
    <section id="about" className="bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-douhelp to-yellow-douhelp-light">
            Sobre Nós
          </h2>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-douhelp rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            <span className="font-semibold text-yellow-douhelp">O Dou Um Help!</span> é uma plataforma digital em desenvolvimento que tem como missão conectar pessoas que precisam de ajuda com quem sabe ajudar. Nosso foco está nos serviços domésticos, promovendo uma experiência <span className="font-semibold text-yellow-douhelp">prática</span>, <span className="font-semibold text-yellow-douhelp">segura</span> e <span className="font-semibold text-yellow-douhelp">acessível</span> para quem busca contratar ou oferecer serviços como reparos, manutenção, limpeza, montagem de móveis, entre outros.
          </p>
          
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-8">
            Estamos construindo mais que um aplicativo. Estamos desenvolvendo uma <span className="font-semibold text-yellow-douhelp">rede de confiança, colaboração e oportunidades</span>.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-8 italic">
            Porque no final do dia, todo mundo precisa de um help. E o <span className="font-semibold text-yellow-douhelp">Dou Um Help!</span> está aqui pra isso.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
