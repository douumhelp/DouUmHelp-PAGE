import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DeveloperModal from './DeveloperModal';

const DevelopersSection = () => {
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  const developers = [
    {
      name: "Eduardo Aguiar",
      role: "Gestor de Projetos e Produto",
      image: "https://iili.io/FFtvuCN.jpg",
      github: "https://github.com/EduHOA",
      linkedin: "https://www.linkedin.com/in/edu-aguiar/",
      instagram: "https://www.instagram.com/eduaguiar.h/",
      email: "eduaguiar@douumhelp.com",
      bio: "Apaixonado por transformar ideias em soluções reais, atuo como líder no projeto Dou Um Help!, coordenando o time de desenvolvimento, garantindo entregas alinhadas aos objetivos do produto e às necessidades dos usuários.\nCom uma abordagem estratégica e colaborativa, integro áreas técnicas e de negócio, conduzindo o planejamento de sprints, validação de funcionalidades, gestão de backlog e acompanhamento de métricas.\nAlém de gerenciar pessoas, Edu impulsiona propósito — conectando tecnologia com inclusão e praticidade para o dia a dia das pessoas.",
      skills: ["Gestão de Projetos", "React", "Node.js", "TypeScript", "Gestão de Equipe"],
      website: "https://seu-site.com"
    },
    {
      name: "Nathan Schiavon",
      role: "Desenvolvedor Full Stack",
      image: "https://iili.io/FFtvxTv.jpg",
      github: "https://github.com/SchiavonNathan",
      linkedin: "https://www.linkedin.com/in/schiavonnathan/",
      instagram: "https://www.instagram.com/nathanschiavon_/",
      email: "nathanschiavon@douumhelp.com",
      bio: "Atuo no projeto Dou Um Help! desenvolvendo tanto o front-end quanto o back-end da plataforma, sendo peça-chave na integração entre as interfaces do cliente, prestador e a lógica do sistema.\nCom domínio em tecnologias web e backend, contribuo para a criação de funcionalidades robustas, intuitivas e eficientes — desde a construção de APIs até a entrega de experiências fluídas na interface. Além da parte técnica, me destaco por uma visão de produto e capacidade de adaptação em ambientes colaborativos e ágeis.\nApaixonado por tecnologia e propósito, ele desenvolve mais do que código: entrega valor real para quem precisa de ajuda e para quem quer ajudar.",
      skills: ["React", "Node.js", "TypeScript", "Infraestrutura de TI", "Banco de Dados"]
    },
    {
      name: "Lucas Foppa ",
      role: "Desenvolvedor Full Back-end",
      image: "https://iili.io/FFtvAGI.jpg",
      github: "https://github.com/Elebeg",
      linkedin: "https://www.linkedin.com/in/lucas-schuler-foppa-24723b272/",
      instagram: "https://www.instagram.com/lucasfoppa9/",
      email: "lucasfoppa@douumhelp.com",
      bio: "Desenvolvedor Backend focado em performance, segurança e estruturação de sistemas escaláveis.\nSou responsável por arquitetar e implementar o núcleo lógico do Dou Um Help!, garantindo que a plataforma funcione de forma estável, segura e eficiente por trás das interfaces visíveis.\nCom profundo conhecimento em banco de dados, autenticação,aplicações em tempo real, criação de APIs e modelagem de entidades, desenvolvo a base que sustenta as principais funcionalidades da plataforma — como cadastro, sistema de ordens, comunicação em tempo real.\nDomínio técnico com atenção aos detalhes, contribuindo para a robustez do projeto e a qualidade das entregas. Meu trabalho garante que cada requisição feita no app seja atendida com precisão, confiabilidade e desempenho.",
      skills: ["Node.js", "TypeScript", "JavaScript", "Websocket", "Empreendedorismo"]
    },
    {
      name: "Isaac Arantes",
      role: "Desenvolvedor Full Stack",
      image: "https://iili.io/FFtvIQp.jpg",
      github: "https://github.com/isaac-arantes-t",
      linkedin: "https://www.linkedin.com/in/isaac-arantes-tobbin-a713ba26a/",
      instagram: "https://www.instagram.com/isaac.arantes.t/",
      email: "isaacarantes@douumhelp.com",
      bio: "Desenvolvedor Full Stack com expertise em banco de dados e foco em soluções escaláveis e bem estruturadas.\nAtuo no Dou Um Help! integrando o desenvolvimento do front e back-end com domínio técnico em modelagem, performance e segurança de dados. É responsável por estruturar as entidades e relações que sustentam toda a lógica do sistema, desde o cadastro até as ordens de serviço, propostas e avaliações.\nAlém de codar funcionalidades completas, Isaac garante que os dados trafeguem de forma eficiente, consistente e segura entre o app e o banco PostgreSQL. Habilidade em alinhar regras de negócio com arquitetura de dados fortalece a base técnica da plataforma.\nCom olhar analítico e pensamento estratégico, contribuo para um sistema sólido, fluido e preparado para crescer.",
      skills: ["Banco de Dados", "Node.js", "TypeScript", "JavaScript", "React Native"]
    },
    {
      name: "Matheus Nunes",
      role: "Desenvolvedor Front End Mobile",
      image: "https://iili.io/FFtvzjR.jpg",
      github: "https://www.linkedin.com/in/matheusnunesinacio/",
      linkedin: "https://linkedin.com/in/SEU_USUARIO_LINKEDIN",
      instagram: "",
      email: "matheusnunes@douumhelp.com",
      bio: "Desenvolvedor Front-end Mobile especializado em React Native, com foco em usabilidade, performance e experiência do usuário.\nSou responsável pelo desenvolvimento do aplicativo do Dou Um Help!, garantindo que cada tela entregue fluidez, acessibilidade e eficiência para quem utiliza a plataforma.\nCom domínio em React Native e atenção aos padrões de design mobile, transformo requisitos técnicos em interfaces intuitivas e responsivas, conectando o usuário final a funcionalidades como cadastro, login, solicitação de serviços, chat e avaliações.\nAlém do código, ele contribui ativamente na melhoria da experiência do usuário (UX), aplicando boas práticas de navegação, animações suaves.\nMeu trabalho é essencial para que o app seja funcional, agradável e confiável na palma da mão.",
      skills: ["React Native", "React", "Design", "Prototipagem", "Mobile UI"]
    },
    {
      name: "Matheus Souza",
      role: "Desenvolvedor Front End Web e QA",
      image: "https://iili.io/FFtvCva.jpg",
      github: "https://github.com/msouza009",
      linkedin: "https://www.linkedin.com/in/matheus-souza-1a0622235/",
      instagram: "https://www.instagram.com/msouza009/",
      email: "matheussouza@douumhelp.com",
      bio: "Desenvolvedor Front-end Web e Tester (QA), com foco em performance visual e qualidade de entrega.\nAtuo no Dou Um Help! desenvolvendo a interface web da plataforma com React, garantindo uma experiência fluida, funcional e alinhada à identidade do projeto — especialmente voltada ao painel do prestador de serviços.\nAlém de construir componentes reutilizáveis e responsivos, também atuo como Quality Assurance, sendo responsável por testar funcionalidades, identificar bugs e validar o comportamento esperado do sistema antes das entregas.\nCom atenção aos detalhes e forte senso de usabilidade, contribuo tanto para o visual da aplicação quanto para a confiança e estabilidade do produto final, unindo tecnologia com qualidade.",
      skills: ["React", "Quality Assurance", "QA", "Prototipagem", "Cypress Automation"]
    }
  ];

  return (
    <section id="desenvolvedores" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossa Equipe
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Conheça os desenvolvedores por trás do DouUmHelp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer h-full"
              onClick={() => setSelectedDeveloper(dev)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-yellow-douhelp mb-6"
                  />
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                    {dev.name}
                  </h3>
                  <p className="text-lg text-yellow-douhelp font-medium text-center mb-4">
                    {dev.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6 line-clamp-3 whitespace-pre-line">
                    {dev.bio}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {dev.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-yellow-douhelp bg-opacity-10 text-yellow-douhelp rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                  {dev.skills.length > 3 && (
                    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                      +{dev.skills.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex justify-center space-x-6">
                  {dev.github && (
                    <a
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-yellow-douhelp transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      title="GitHub"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                  {dev.linkedin && (
                    <a
                      href={dev.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-yellow-douhelp transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      title="LinkedIn"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                        />
                      </svg>
                    </a>
                  )}
                  {dev.instagram && (
                    <a
                      href={dev.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-yellow-douhelp transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      title="Instagram"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <DeveloperModal
        developer={selectedDeveloper}
        isOpen={!!selectedDeveloper}
        onClose={() => setSelectedDeveloper(null)}
      />
    </section>
  );
};

export default DevelopersSection; 