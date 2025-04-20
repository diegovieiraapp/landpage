import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  testimonial: string;
  rating: number;
  imageSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  testimonial,
  rating,
  imageSrc
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 flex-grow italic">"{testimonial}"</p>
      
      <div className="flex items-center mt-2">
        <img
          src={imageSrc}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;