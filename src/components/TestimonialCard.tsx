import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  pet: string;
  image: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, pet, image, quote }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="h-12 w-12 rounded-full object-cover" />
        <div className="ml-4">
          <h4 className="text-lg font-medium text-gray-800">{name}</h4>
          <p className="text-gray-600">{pet}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;