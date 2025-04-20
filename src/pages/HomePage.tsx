import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Shield, TrendingUp } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Controle financeiro <span className="text-primary">simplificado</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Gerencie suas finanças de forma simples e eficiente. Economize mais e alcance seus objetivos financeiros.
              </p>
              <Link 
                to="/login" 
                className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md transition duration-300"
              >
                Começar Gratuitamente
              </Link>
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <img 
                src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg" 
                alt="PoupeOn Dashboard" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Por que escolher o PoupeOn?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={LineChart}
              title="Controle Total"
              description="Acompanhe seus gastos em tempo real e tome decisões financeiras mais inteligentes."
            />
            <FeatureCard
              icon={Shield}
              title="100% Seguro"
              description="Seus dados são protegidos com a mais alta tecnologia de criptografia."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Resultados Reais"
              description="Alcance seus objetivos financeiros com nossas ferramentas e orientações."
            />
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Comece sua jornada financeira
            </h2>
            <p className="text-lg text-gray-600">
              Junte-se a milhares de pessoas que já transformaram suas finanças com o PoupeOn.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Pronto para transformar suas finanças?"
        description="Comece agora mesmo, é gratuito!"
        buttonText="Criar Conta"
        buttonLink="/login"
      />
    </>
  );
};

export default HomePage;