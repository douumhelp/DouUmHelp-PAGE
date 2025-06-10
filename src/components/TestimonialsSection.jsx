import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Souza',
    role: 'Cliente desde 2023',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    text: 'Ótimo serviço, rápido e muito profissional! Encontrei um eletricista em menos de 30 minutos e o problema foi resolvido na hora.',
    rating: 5,
    service: 'Serviço Elétrico'
  },
  {
    name: 'Carlos Silva',
    role: 'Cliente desde 2024',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    text: 'Chamei pelo app e em minutos já tinha um prestador na minha casa. Excelente atendimento e preço justo!',
    rating: 5,
    service: 'Montagem de Móveis'
  },
  {
    name: 'Ana Paula',
    role: 'Cliente desde 2023',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    text: 'Fiquei impressionada com a agilidade e educação dos prestadores! O serviço de limpeza foi impecável.',
    rating: 5,
    service: 'Limpeza Residencial'
  },
  {
    name: 'João Oliveira',
    role: 'Cliente desde 2024',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    text: 'Precisava de ajuda com meu pet e encontrei um ótimo profissional. Super atencioso e cuidadoso!',
    rating: 5,
    service: 'Cuidados com Pets'
  },
  {
    name: 'Mariana Santos',
    role: 'Cliente desde 2023',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    text: 'O serviço de software resolveu meu problema rapidamente. Profissionais muito capacitados e preço acessível.',
    rating: 5,
    service: 'Suporte Técnico'
  },
  {
    name: 'Pedro Costa',
    role: 'Cliente desde 2024',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    text: 'Encontrei um mecânico excelente para meu carro. Preço justo e trabalho de qualidade!',
    rating: 5,
    service: 'Mecânica Automotiva'
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Histórias reais de pessoas que encontraram a ajuda que precisavam
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-douhelp"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <StarRating rating={item.rating} />
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{item.text}"
                </p>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm font-medium text-yellow-douhelp">
                    {item.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
        
        </motion.div>
      </div>
    </section>
  );
}

