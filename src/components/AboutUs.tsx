{/* Navigation */ }
import React from 'react';
import { Heart, Stethoscope, Utensils, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  
  const counterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

const AboutUs: React.FC = () => {
    return (
        <section className="py-16 bg-rose-50">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <motion.div
                    className="text-center mb-16"
                    variants={cardVariants}
                >
                    <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Why Choose Animore?</h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        We're dedicated to providing exceptional care for your pets with a focus on comfort, health, and happiness.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[Star, Heart, Stethoscope, Utensils].map((Icon, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-rose-100 text-rose-500 mb-4">
                                <Icon size={24} />
                            </div>
                            <h3 className="text-xl font-medium text-gray-800 mb-2">
                                {['Experienced Staff', 'Loving Environment', 'Modern Facilities', 'Personalized Care'][index]}
                            </h3>
                            <p className="text-gray-600">
                                {['Our team consists of certified professionals with years of experience in pet care.',
                                    'We treat every pet with love and care, ensuring they feel comfortable and safe.',
                                    'Our state-of-the-art facilities are designed to provide the best care possible.',
                                    'We understand that each pet is unique and provide tailored care to meet their specific needs.'][index]}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center items-center mt-11">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {['250+', '15+', '20', '100%'].map((value, index) => (
                            <motion.div key={index} variants={counterVariants}>
                                <h4 className="text-black-600 font-bold text-4xl sm:text-5xl lg:text-6xl mb-2">
                                    {value}
                                </h4>
                                <p className="text-gray-600 text-lg sm:text-xl">
                                    {['Projects Completed', 'Years Experience', 'Design Awards', 'Client Satisfaction'][index]}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )

};
export default AboutUs;
