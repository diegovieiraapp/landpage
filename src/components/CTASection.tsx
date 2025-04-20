import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink
}) => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white opacity-90 mb-8">{description}</p>
        <Link 
          to={buttonLink} 
          className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-md hover:bg-gray-50 transition duration-150"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;