import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-bold text-yellow-douhelp mb-4">
        Dou Um Help
      </h1>
      <p className="text-gray-input text-lg md:text-xl mb-6">
        Ajudando você com serviços locais e maridos de aluguel de confiança!
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-yellow-douhelp hover:bg-yellow-douhelp-light text-black font-semibold py-3 px-8 rounded-full transition">
          Peça seu Help!
        </button>
        <button className="border-2 border-yellow-douhelp hover:bg-yellow-douhelp-light text-yellow-douhelp hover:text-black font-semibold py-3 px-8 rounded-full transition">
          Acessar como Prestador
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
