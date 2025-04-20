import React from 'react';
import { Users, Target, Award, BookOpen, PiggyBank } from 'lucide-react';
import CTASection from '../components/CTASection';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre o PoupeOn
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Conheça nossa história, missão e os valores que nos guiam na busca por democratizar o acesso à educação financeira no Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Nossa História
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O PoupeOn nasceu em 2023 a partir de uma visão clara: transformar a relação dos brasileiros com o dinheiro. Fundado por um grupo de profissionais com experiência em finanças e tecnologia, nossa plataforma foi desenvolvida para simplificar o gerenciamento financeiro pessoal.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Percebemos que muitas pessoas enfrentavam dificuldades para organizar suas finanças, economizar e investir de forma inteligente. A falta de educação financeira e de ferramentas acessíveis criava uma barreira para que as pessoas pudessem ter mais controle sobre seu dinheiro.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hoje, o PoupeOn já ajudou mais de 50 mil brasileiros a economizar, reduzir dívidas e alcançar seus objetivos financeiros, fortalecendo nossa missão de democratizar o acesso à saúde financeira no país.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
                  alt="Equipe PoupeOn" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full z-0 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nossa Missão e Valores
            </h2>
            <p className="text-lg text-gray-700">
              Somos guiados por princípios fortes que orientam todas as nossas decisões e ações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-primary-lighter p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Missão</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Democratizar o acesso à educação financeira e fornecer ferramentas intuitivas que ajudem os brasileiros a conquistarem independência financeira, realizarem seus sonhos e construírem um futuro mais próspero.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-primary-lighter p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Visão</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser a principal plataforma de gestão financeira pessoal do Brasil, ajudando milhões de pessoas a transformarem sua relação com o dinheiro e alcançarem uma vida financeira saudável e equilibrada.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">Nossos Valores</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Transparência",
                  description: "Somos transparentes em tudo o que fazemos, desde nossa comunicação até nosso modelo de negócio."
                },
                {
                  title: "Simplicidade",
                  description: "Acreditamos que a gestão financeira deve ser acessível a todos, por isso prezamos pela simplicidade em nossa plataforma."
                },
                {
                  title: "Empatia",
                  description: "Entendemos as dificuldades financeiras que as pessoas enfrentam e trabalhamos para oferecer soluções adequadas à realidade brasileira."
                },
                {
                  title: "Inovação",
                  description: "Buscamos constantemente novas maneiras de melhorar nossa plataforma e ajudar nossos usuários de forma mais eficiente."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h4 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h4>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nossa Equipe
            </h2>
            <p className="text-lg text-gray-700">
              Profissionais apaixonados por tecnologia e finanças trabalhando juntos para transformar a relação dos brasileiros com o dinheiro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Oliveira",
                position: "CEO & Fundador",
                bio: "Ex-executivo do mercado financeiro com mais de 15 anos de experiência, Ricardo fundou o PoupeOn com a missão de democratizar a educação financeira no Brasil.",
                image: "https://randomuser.me/api/portraits/men/41.jpg"
              },
              {
                name: "Fernanda Santos",
                position: "CTO",
                bio: "Engenheira de software com experiência em fintechs, Fernanda lidera o desenvolvimento tecnológico do PoupeOn focando em inovação e experiência do usuário.",
                image: "https://randomuser.me/api/portraits/women/54.jpg"
              },
              {
                name: "Bruno Costa",
                position: "Diretor de Produto",
                bio: "Especialista em UX com passagem por grandes empresas de tecnologia, Bruno é responsável por garantir que o PoupeOn seja intuitivo e eficaz.",
                image: "https://randomuser.me/api/portraits/men/72.jpg"
              },
              {
                name: "Camila Ferreira",
                position: "Diretora de Marketing",
                bio: "Com vasta experiência em marketing digital, Camila lidera as estratégias de crescimento e aquisição de usuários do PoupeOn.",
                image: "https://randomuser.me/api/portraits/women/17.jpg"
              },
              {
                name: "André Lima",
                position: "Educador Financeiro",
                bio: "Economista e educador financeiro certificado, André desenvolve conteúdos educativos e estratégias de planejamento financeiro para nossos usuários.",
                image: "https://randomuser.me/api/portraits/men/22.jpg"
              },
              {
                name: "Lúcia Mendes",
                position: "Diretora de Operações",
                bio: "Especialista em operações com mais de 10 anos de experiência, Lúcia garante que todos os processos do PoupeOn sejam eficientes e escaláveis.",
                image: "https://randomuser.me/api/portraits/women/38.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              PoupeOn em Números
            </h2>
            <p className="text-lg text-gray-700">
              O impacto que estamos causando na vida financeira dos brasileiros.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "50mil+",
                label: "Usuários Ativos",
                icon: Users
              },
              {
                number: "R$ 120M+",
                label: "Economizados",
                icon: PiggyBank
              },
              {
                number: "95%",
                label: "Satisfação",
                icon: Award
              },
              {
                number: "200+",
                label: "Artigos Educacionais",
                icon: BookOpen
              }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100">
                  <div className="mx-auto bg-primary-lighter w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-700">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Junte-se a nós nessa jornada"
        description="Faça parte da comunidade PoupeOn e transforme sua vida financeira hoje mesmo."
        buttonText="Conhecer a Plataforma"
        buttonLink="/"
      />
    </>
  );
};

export default AboutPage;