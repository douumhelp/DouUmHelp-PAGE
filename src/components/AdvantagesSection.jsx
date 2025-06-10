import React from 'react';
import { Check, Clock, Shield, Star, Users, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: Clock,
      title: "Atendimento Rápido",
      description: "Conectamos você com profissionais disponíveis em sua região em minutos.",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Todos os profissionais são verificados e avaliados por nossa equipe.",
      color: "text-green-500"
    },
    {
      icon: Star,
      title: "Qualidade Comprovada",
      description: "Sistema de avaliações e feedback para garantir o melhor serviço.",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      title: "Profissionais Experientes",
      description: "Rede de prestadores qualificados e com experiência comprovada.",
      color: "text-purple-500"
    },
    {
      icon: Wallet,
      title: "Preços Justos",
      description: "Valores transparentes e competitivos para todos os serviços.",
      color: "text-red-500"
    },
    {
      icon: Check,
      title: "Satisfação Garantida",
      description: "Garantimos a qualidade do serviço ou seu dinheiro de volta.",
      color: "text-indigo-500"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <motion.div
        className="flex flex-col items-center justify-center min-h-[80vh]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-douhelp to-yellow-douhelp-light">
            Por que escolher o Dou Um Help?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            Oferecemos uma experiência completa e segura para quem precisa de ajuda e para quem quer ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`${item.color} mb-6 flex justify-center`}>
                {React.createElement(item.icon, { className: "w-16 h-16" })}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-xl text-gray-600 dark:text-gray-400 italic">
            "Nossa missão é tornar o acesso a serviços de qualidade mais fácil, rápido e seguro para todos."
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
