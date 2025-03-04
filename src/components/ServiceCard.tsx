import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)' }}
        className="bg-white p-6 rounded-lg shadow-md transition-all cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-rose-100 text-rose-500 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="inline-flex items-center text-rose-500 hover:text-rose-600 transition-colors">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && details && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-rose-100 text-rose-500 mr-3">
                      {icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                  </div>
                  <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceCard;
