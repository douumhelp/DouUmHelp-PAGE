import React from 'react';

const testimonials = [
  {
    name: 'Maria Souza',
    text: 'Ótimo serviço, rápido e muito profissional! Recomendo demais.',
  },
  {
    name: 'Carlos Silva',
    text: 'Chamei pelo app e em minutos já tinha um prestador na minha casa. Excelente!',
  },
  {
    name: 'Ana Paula',
    text: 'Fiquei impressionada com a agilidade e educação dos prestadores!'
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-black mb-12">Depoimentos</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-600 italic">"{item.text}"</p>
            <p className="mt-4 font-semibold text-yellow-500">- {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
