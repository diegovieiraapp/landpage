import React from 'react';
import { TrendingUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <TrendingUp className="h-6 w-6 text-primary mr-2" />
            <span className="text-xl font-bold text-gray-900">PoupeOn</span>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} PoupeOn. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;