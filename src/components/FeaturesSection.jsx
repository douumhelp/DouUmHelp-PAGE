import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Wrench } from 'lucide-react';

const features = [
  {
    title: 'Soluções reais para o dia a dia',
    description: 'Com o Dou Um Help!, você encontra ajuda para o que realmente importa: desde pequenos reparos até serviços mais complexos',
    icon: Wrench
  },
  {
    title: 'Conexão Direta e Segura',
    description: 'Conectamos clientes a prestadores de serviços de forma rápida, com chat interno, avaliações reais e pagamento seguro via Pix ou cartão.',
    icon: CheckCircle
  },
  {
    title: 'Simples e Acessível',
    description: 'Solicitar ajuda nunca foi tão fácil. Com apenas alguns cliques, você agenda, negocia e resolve o que precisa — direto do seu celular.',
    icon: CheckCircle
  },
  {
    title: 'Valorização do Trabalho Autônomo',
    description: 'Damos visibilidade e estrutura para que prestadores autônomos cresçam e gerem renda com autonomia, organização e dignidade.',
    icon: CheckCircle
  },
  {
    title: 'Tecnologia com Propósito',
    description: 'Estamos construindo uma plataforma pensada para a realidade brasileira, com usabilidade intuitiva, preços justos e foco em inclusão social.',
    icon: CheckCircle
  },
  {
    title: 'Atendimento local e humanizado',
    description: 'Queremos que você encontre quem está perto de você e pronto para ajudar, com agilidade e profissionalismo.',
    icon: CheckCircle
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-douhelp to-yellow-douhelp-light">
            Por que escolher o Dou Um Help?
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            No <span className="font-semibold text-yellow-douhelp">Dou Um Help!</span>, 
            não oferecemos apenas um serviço — oferecemos confiança, praticidade e impacto real na vida das pessoas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start text-left hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                {React.createElement(feature.icon, {
                  className: "text-yellow-douhelp w-8 h-8 mr-3 flex-shrink-0"
                })}
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
