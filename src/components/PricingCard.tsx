import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, period, features, isPopular }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${isPopular ? 'ring-2 ring-rose-500 transform scale-105' : ''}`}>
  {isPopular && (
    <div className="bg-rose-500 text-white text-center py-2 font-medium">
      Most Popular
    </div>
  )}
  <div className="p-6">
    <div className="text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-800">{price}</span>
        <span className="text-gray-600 ml-2">{period}</span>
      </div>
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <div className="flex-shrink-0">
            <Check className="h-5 w-5 text-green-500" />
          </div>
          <span className="ml-3 text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
        isPopular
          ? 'bg-rose-500 text-white hover:bg-rose-600'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}
    >
      Choose Plan
    </button>
  </div>
</div>

  );
};

export default PricingCard;