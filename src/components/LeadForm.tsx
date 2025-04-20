import React, { useState } from 'react';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!formData.name || !formData.email) {
      setError('Por favor, preencha todos os campos.');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor, insira um email válido.');
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '' });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
      {isSubmitted ? (
        <div className="text-center">
          <p className="text-green-600 font-medium">
            Obrigado pelo interesse! Entraremos em contato em breve.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && (
            <p className="text-red-600 mb-4 text-sm">{error}</p>
          )}
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Seu nome completo"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="seuemail@exemplo.com"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition duration-150"
          >
            {isSubmitting ? 'Enviando...' : 'Começar Agora'}
          </button>
        </form>
      )}
    </div>
  );
};

export default LeadForm;