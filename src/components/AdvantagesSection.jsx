import React from 'react';

const AdvantagesSection = () => {
  const advantages = [
    "Profissionais experientes",
    "Atendimento rápido",
    "Serviço de qualidade",
    "Preços acessíveis",
  ];

  return (
    <section className="px-6 py-16 bg-gray-100 text-gray-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Por que escolher nossa plataforma?</h2>
        <ul className="space-y-4 text-left">
          {advantages.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-douhelp rounded-full"></div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AdvantagesSection;
