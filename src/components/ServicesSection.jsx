import React from 'react';
import { Wrench, Hammer, PlugZap } from 'lucide-react'; // usando ícones lucide (ou pode ser outro)

const ServicesSection = () => {
  return (
    <section className="px-6 py-16 bg-white text-gray-700">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <Wrench className="text-yellow-douhelp w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold">Reparos</h3>
          </div>
          <div className="flex flex-col items-center">
            <Hammer className="text-yellow-douhelp w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold">Montagem</h3>
          </div>
          <div className="flex flex-col items-center">
            <PlugZap className="text-yellow-douhelp w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold">Instalações</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
