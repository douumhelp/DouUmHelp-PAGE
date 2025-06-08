import React from 'react';
import { Store, Users, Dog, Home, Laptop, Car } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  return (
    <section className="px-6 py-16 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold mb-10 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Nossos Serviços
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {[ 
            { Icon: Store, title: "Serviços Comerciais" },
            { Icon: Users, title: "Serviço Humano" },
            { Icon: Dog, title: "Serviço de Pet" },
            { Icon: Home, title: "Serviço Doméstico" },
            { Icon: Laptop, title: "Serviço de Software" },
            { Icon: Car, title: "Serviço Veicular" }
          ].map(({ Icon, title }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Icon className="text-yellow-douhelp w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold text-center dark:text-white">{title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


