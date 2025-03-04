{/* Navigation */ }
import React from 'react';
import { Heart } from 'lucide-react';

const Navigation: React.FC = () => {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Heart className="h-8 w-8 text-rose-500" />
                        <span className="ml-2 text-xl font-bold text-gray-800">Animore</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#services" className="text-gray-600 hover:text-rose-500 transition-colors">Services</a>
                        <a href="#pricing" className="text-gray-600 hover:text-rose-500 transition-colors">Pricing</a>
                        <a href="#testimonials" className="text-gray-600 hover:text-rose-500 transition-colors">Testimonials</a>
                        {/* <a href="#contact" className="text-gray-600 hover:text-rose-500 transition-colors">Contact</a> */}
                        <button className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors" onClick={() => { window.location.href = '#contact' }}>Book Now</button>
                    </div>
                    <div className="md:hidden flex items-center mr-5">
                        <button className="text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )

};
export default Navigation;
