import React from 'react';
import { Wrench, Hammer, PlugZap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  return (
    <section className="px-6 py-16 bg-white text-gray-700">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Nossos Serviços
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[ 
            { Icon: Wrench, title: "Reparos" },
            { Icon: Hammer, title: "Montagem" },
            { Icon: PlugZap, title: "Instalações" }
          ].map(({ Icon, title }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Icon className="text-yellow-douhelp w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold">{title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


