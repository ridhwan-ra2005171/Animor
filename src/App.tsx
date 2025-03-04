import React from 'react';
import { Heart, Scissors, Stethoscope, Bluetooth as Tooth, Home, Utensils, ArrowRight, Star, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ServiceCard from './components/ServiceCard';
import PricingCard from './components/PricingCard';
import TestimonialCard from './components/TestimonialCard';

function App() {
  const services = [
    {
      icon: <Scissors size={24} />,
      title: "Pet Grooming",
      description: "Professional grooming services to keep your pet looking and feeling their best. Includes bathing, haircuts, nail trimming, and more.",
      details: {
        fullDescription: "Our professional pet grooming services are designed to keep your furry friend looking and feeling their absolute best. Our experienced groomers use gentle techniques and premium products to ensure your pet enjoys their grooming session. From basic baths to full styling, we tailor our services to meet your pet's specific needs and your preferences.",
        benefits: [
          "Reduces shedding and keeps your home cleaner",
          "Prevents matting and skin irritations",
          "Early detection of skin issues, lumps, or parasites",
          "Proper nail length prevents pain and posture problems",
          "Clean ears prevent infections",
          "Professional products for coat health"
        ],
        pricing: "Starting at $35 for basic grooming. Full service packages from $49 to $89 depending on pet size and coat type.",
        duration: "30 minutes to 2 hours depending on service and pet size"
      }
    },
    {
      icon: <Stethoscope size={24} />,
      title: "Health Check-ups",
      description: "Regular check-ups to ensure your pet's health and well-being. Our experienced veterinarians provide comprehensive examinations.",
      details: {
        fullDescription: "Regular health check-ups are essential for maintaining your pet's overall well-being and catching potential health issues before they become serious. Our comprehensive examinations are conducted by experienced veterinarians who take the time to thoroughly assess your pet's health status and discuss any concerns you might have. We recommend bi-annual check-ups for most pets, and more frequent visits for senior pets or those with chronic conditions.",
        benefits: [
          "Early detection of health issues",
          "Customized vaccination schedules",
          "Weight management guidance",
          "Dental health assessment",
          "Age-appropriate health screenings",
          "Behavioral consultation"
        ],
        pricing: "Basic check-up: $65. Comprehensive exam with bloodwork: $120-$180.",
        duration: "30-45 minutes for standard check-ups"
      }
    },
    {
      icon: <Tooth size={24} />,
      title: "Dental Care",
      description: "Complete dental care services to maintain your pet's oral health. Includes cleaning, polishing, and dental examinations.",
      details: {
        fullDescription: "Dental health is a crucial but often overlooked aspect of pet care. Poor dental hygiene can lead to serious health issues beyond just bad breath, including heart, liver, and kidney disease. Our complete dental care services include thorough examinations, professional cleaning, polishing, and when necessary, extractions or other dental procedures. We use modern equipment and techniques to ensure your pet's comfort throughout the process.",
        benefits: [
          "Prevents bad breath and tooth decay",
          "Reduces risk of gum disease and tooth loss",
          "Prevents pain and difficulty eating",
          "Reduces risk of organ damage from bacteria",
          "Comprehensive dental assessment",
          "Personalized home dental care advice"
        ],
        pricing: "Basic dental cleaning: $180-$250. Advanced dental procedures: $300-$600 depending on complexity.",
        duration: "1-3 hours (includes anesthesia recovery time)"
      }
    },
    {
      icon: <Home size={24} />,
      title: "Pet Sitting",
      description: "Reliable pet sitting services when you're away. We ensure your pets receive the care and attention they need in your absence.",
      details: {
        fullDescription: "Our pet sitting services provide peace of mind when you're away from home. Whether it's a day trip or an extended vacation, our professional pet sitters ensure your pets receive the care, attention, and love they need in your absence. We follow your pet's routine closely, providing meals, medication, exercise, and plenty of playtime and affection. All our sitters are background-checked, insured, and have experience with various pet types and temperaments.",
        benefits: [
          "Pets stay in the comfort of their own home",
          "Reduced stress compared to boarding facilities",
          "Maintenance of regular routines and diet",
          "Daily updates with photos and reports",
          "Home security (mail collection, lights, etc.)",
          "Emergency response protocol in place"
        ],
        pricing: "30-minute visit: $25. 60-minute visit: $40. Overnight stay: $85-$120.",
        duration: "Customizable based on your pet's needs and your schedule"
      }
    },
    {
      icon: <Utensils size={24} />,
      title: "Nutrition Advice",
      description: "Expert nutrition guidance tailored to your pet's specific needs. We help you choose the right diet for optimal health.",
      details: {
        fullDescription: "Proper nutrition is the foundation of your pet's health and longevity. Our nutrition consultation services provide expert guidance tailored to your pet's specific needs, taking into account their age, breed, weight, activity level, and any health conditions. We help you navigate the overwhelming number of pet food options to find the right diet that supports optimal health for your furry family member. Our nutritionists stay up-to-date with the latest research to provide evidence-based recommendations.",
        benefits: [
          "Customized nutrition plans for your pet's specific needs",
          "Weight management strategies",
          "Guidance for pets with food allergies or sensitivities",
          "Advice for pets with medical conditions requiring dietary management",
          "Supplement recommendations when appropriate",
          "Ongoing support and plan adjustments as needed"
        ],
        pricing: "Initial consultation: $75. Follow-up consultations: $45. Comprehensive nutrition plan: $120.",
        duration: "Initial consultation: 45-60 minutes. Follow-ups: 30 minutes"
      }
    }
  ];

  const packages = [
    {
      title: "Basic Care",
      price: "$49",
      period: "per visit",
      features: [
        "Basic Grooming",
        "Health Check-up",
        "Nail Trimming",
        "Ear Cleaning",
        "15-minute Play Session"
      ],
      isPopular: false
    },
    {
      title: "Premium Care",
      price: "$89",
      period: "per visit",
      features: [
        "Full Grooming Service",
        "Comprehensive Health Check-up",
        "Dental Cleaning",
        "Nail Trimming & Filing",
        "30-minute Play Session",
        "Nutrition Consultation"
      ],
      isPopular: true
    },
    {
      title: "Complete Care",
      price: "$129",
      period: "per visit",
      features: [
        "Deluxe Grooming Package",
        "Full Veterinary Examination",
        "Deep Dental Cleaning",
        "Nail & Paw Care",
        "1-hour Play & Exercise",
        "Custom Nutrition Plan",
        "Take-home Care Kit"
      ],
      isPopular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      pet: "Max (Golden Retriever)",
      image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      quote: "The team at PawCare treats Max like their own pet. Their grooming services are exceptional, and Max always comes home happy!"
    },
    {
      name: "Michael Rodriguez",
      pet: "Luna (Maine Coon)",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      quote: "Luna used to hate going to the vet, but she actually enjoys her visits to PawCare. Their gentle approach makes all the difference."
    },
    {
      name: "Emily Chen",
      pet: "Buddy (Beagle)",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      quote: "The nutrition advice we received completely transformed Buddy's health. He's more energetic and happier than ever!"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">PawCare</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-rose-500 transition-colors">Services</a>
              <a href="#pricing" className="text-gray-600 hover:text-rose-500 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-rose-500 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-rose-500 transition-colors">Contact</a>
              <button className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors">Book Now</button>
            </div>
            <div className="md:hidden flex items-center">
              <button className="text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive care for your beloved pets, ensuring they receive the attention and treatment they deserve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Service Packages</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect care package for your pet's needs. All packages include personalized attention and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Why Choose PawCare?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We're dedicated to providing exceptional care for your pets with a focus on comfort, health, and happiness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-rose-100 text-rose-500 mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Experienced Staff</h3>
              <p className="text-gray-600">Our team consists of certified professionals with years of experience in pet care.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-rose-100 text-rose-500 mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Loving Environment</h3>
              <p className="text-gray-600">We treat every pet with love and care, ensuring they feel comfortable and safe.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-rose-100 text-rose-500 mb-4">
                <Stethoscope size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Modern Facilities</h3>
              <p className="text-gray-600">Our state-of-the-art facilities are designed to provide the best care possible.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-rose-100 text-rose-500 mb-4">
                <Utensils size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Personalized Care</h3>
              <p className="text-gray-600">We understand that each pet is unique and provide tailored care to meet their specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">What Pet Parents Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our happy clients and their pets have to say.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rose-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to give your pet the care they deserve?</h2>
          <p className="mt-4 text-xl text-white opacity-90 max-w-2xl mx-auto">
            Book an appointment today and see the difference quality care makes.
          </p>
          <div className="mt-8">
            <button className="bg-white text-rose-500 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
              Book an Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or ready to schedule an appointment? Reach out to us.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="pet" className="block text-gray-700 mb-2">Pet's Name & Type</label>
                    <input type="text" id="pet" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600 transition-colors">Send Message</button>
                </form>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-rose-500" />
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700 font-medium">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-rose-500" />
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700 font-medium">Email</p>
                      <p className="text-gray-600">info@pawcare.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-rose-500" />
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700 font-medium">Address</p>
                      <p className="text-gray-600">123 Pet Care Lane, Pawsville, CA 94123</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Business Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-800 font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-800 font-medium">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-800 font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-rose-400" />
                <span className="ml-2 text-xl font-bold">PawCare</span>
              </div>
              <p className="mt-4 text-gray-400">
                Providing exceptional care for your beloved pets since 2010. Your pet's health and happiness is our top priority.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pet Grooming</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Health Check-ups</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dental Care</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pet Sitting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Nutrition Advice</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for pet care tips and updates.</p>
              <form className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800" />
                <button type="submit" className="bg-rose-500 text-white px-4 py-2 rounded-r-md hover:bg-rose-600 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PawCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;