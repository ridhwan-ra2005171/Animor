import React, { ReactNode, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  details?: {
    fullDescription: string;
    benefits: string[];
    pricing: string;
    duration: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, details }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-rose-100 text-rose-500 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button 
          onClick={() => setShowModal(true)} 
          className="inline-flex items-center text-rose-500 hover:text-rose-600 transition-colors"
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>

      {/* Modal */}
      {showModal && details && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-rose-100 text-rose-500 mr-3">
                    {icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">About this service</h4>
                  <p className="text-gray-600">{details.fullDescription}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">Benefits</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {details.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-600">{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Pricing</h4>
                    <p className="text-gray-600">{details.pricing}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Duration</h4>
                    <p className="text-gray-600">{details.duration}</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      setShowModal(false);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 transition-colors flex items-center justify-center"
                  >
                    Book this service <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;