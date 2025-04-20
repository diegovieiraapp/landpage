import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validação
    if (!formData.name || !formData.email || !formData.message) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      setIsSubmitting(false);
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor, insira um email válido.');
      setIsSubmitting(false);
      return;
    }

    // Simula envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Estamos aqui para ajudar! Envie-nos uma mensagem e nossa equipe entrará em contato o mais breve possível.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row -mx-4">
            {/* Contact Information */}
            <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
              <div className="bg-gray-50 rounded-lg shadow-md p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Informações de Contato
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-lighter p-2 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Endereço</h3>
                      <p className="text-gray-700">
                        Av. Paulista, 1000<br />
                        Bela Vista, São Paulo - SP<br />
                        CEP: 01310-100
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-lighter p-2 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Telefone</h3>
                      <p className="text-gray-700">
                        +55 (11) 3456-7890<br />
                        +55 (11) 98765-4321
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-lighter p-2 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-700">
                        contato@poupeon.com.br<br />
                        suporte@poupeon.com.br
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="font-semibold text-gray-800 mb-3">Horário de Atendimento</h3>
                  <p className="text-gray-700 mb-4">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h<br />
                    Domingo: Fechado
                  </p>
                </div>

                <div className="mt-10">
                  <h3 className="font-semibold text-gray-800 mb-3">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    {['facebook', 'instagram', 'twitter', 'linkedin'].map(social => (
                      <a 
                        key={social}
                        href={`https://${social}.com`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition duration-300"
                      >
                        <img 
                          src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${social}.svg`} 
                          alt={social} 
                          className="h-5 w-5" 
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3 px-4">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Envie uma Mensagem
                </h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                    <svg 
                      className="w-12 h-12 text-green-500 mx-auto mb-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-xl font-bold text-green-700 mb-2">Mensagem Enviada!</h3>
                    <p className="text-green-700">
                      Obrigado por entrar em contato! Nossa equipe responderá sua mensagem em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                        <p className="text-red-700">{error}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Nome Completo <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          placeholder="Digite seu nome"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          placeholder="seuemail@exemplo.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                          Assunto
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="Suporte técnico">Suporte técnico</option>
                          <option value="Dúvidas sobre o serviço">Dúvidas sobre o serviço</option>
                          <option value="Parcerias">Parcerias</option>
                          <option value="Sugestões">Sugestões</option>
                          <option value="Outro">Outro</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Mensagem <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        placeholder="Como podemos ajudar?"
                        rows={6}
                        required
                      ></textarea>
                    </div>

                    <div className="flex items-center mb-6">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                        required
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                        Concordo com a <a href="#" className="text-primary hover:underline">Política de Privacidade</a> e com o processamento dos meus dados.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'transform hover:-translate-y-1'}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        'Enviar Mensagem'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333757!2d-46.65390548502212!3d-23.563224284682783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1650394988345!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Mapa da localização do PoupeOn"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-700">
              Encontre respostas para as perguntas mais comuns sobre o PoupeOn.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "Como posso começar a usar o PoupeOn?",
                answer: "É simples! Basta criar uma conta gratuita em nosso site, fazer login e começar a configurar seu perfil financeiro. Nosso assistente virtual irá guiá-lo pelos primeiros passos."
              },
              {
                question: "O PoupeOn é gratuito?",
                answer: "Sim, oferecemos um plano gratuito com recursos essenciais para gestão financeira. Também disponibilizamos planos premium com funcionalidades avançadas para usuários que desejam uma experiência mais completa."
              },
              {
                question: "Meus dados financeiros estão seguros no PoupeOn?",
                answer: "Absolutamente! A segurança dos seus dados é nossa prioridade. Utilizamos criptografia de ponta a ponta e seguimos os mais rigorosos protocolos de segurança. Nunca compartilhamos seus dados com terceiros sem sua autorização."
              },
              {
                question: "Posso conectar minhas contas bancárias ao PoupeOn?",
                answer: "Sim, o PoupeOn permite a integração segura com as principais instituições financeiras do Brasil, facilitando a importação automática de transações e saldos."
              },
              {
                question: "Como posso obter suporte se tiver problemas?",
                answer: "Estamos aqui para ajudar! Você pode entrar em contato conosco através do formulário nesta página, pelo email suporte@poupeon.com.br ou pelo chat em nosso aplicativo. Nossa equipe de suporte está disponível em horário comercial de segunda a sexta."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;