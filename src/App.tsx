import React, { useState, useEffect } from 'react';
import { Building2, Globe, Truck, Package, Phone, Mail, MapPin, Car } from 'lucide-react';
import logo from './assets/jclogo-removebg.png';
import { databases, DATABASE_ID, CONTACT_COLLECTION_ID } from './config/appwrite';
import { ID } from 'appwrite';
import ship2 from './assets/images/ship2.jpg';
import ship3 from './assets/images/ship3.jpg';

const backgroundImages = [
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
  ship2,
  ship3
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await databases.createDocument(
        DATABASE_ID,
        CONTACT_COLLECTION_ID,
        ID.unique(),
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src={backgroundImages[currentImageIndex]}
            alt="Global logistics and shipping"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <nav className="relative z-50 flex items-center justify-between px-4 md:px-12 py-6 md:py-8">
          <div className="flex items-center space-x-2">
            <div className="relative w-16 md:w-20 h-16 md:h-20 flex items-center justify-center">
              <img 
                src={logo} 
                alt="Jean-Claude General Trading Co. Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white text-lg md:text-2xl tracking-wide">Jean-Claude General Trading Co.</span>
          </div>
          <div className="hidden md:flex space-x-16 text-white text-sm tracking-widest uppercase">
            <button onClick={() => scrollToSection('services')} className="hover:text-gray-300 transition-colors duration-300">Our Services</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-gray-300 transition-colors duration-300">About</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-300 transition-colors duration-300">Contact</button>
          </div>
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-90"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Content */}
          <div className="absolute top-20 left-0 w-fit bg-black py-8 px-8 rounded-br-3xl">
            <div className="flex flex-col items-start space-y-8">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-white text-xl tracking-wide whitespace-nowrap hover:text-gray-300 transition-colors duration-300"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white text-xl tracking-wide whitespace-nowrap hover:text-gray-300 transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white text-xl tracking-wide whitespace-nowrap hover:text-gray-300 transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 md:px-12 -mt-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-[120px] font-light text-white leading-none mb-4 md:mb-6">
              Global Logistics
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-xl leading-relaxed">
              Premier Shipping Solutions | International Freight | Seamless Supply Chain
            </p>
            <button 
              onClick={() => scrollToSection('services')}
              className="w-full md:w-auto text-white text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-500 px-6 md:px-8 py-4 border border-white rounded-full mb-12"
            >
              Our Services
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 md:mb-8">Our Services</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Jean-Claude General Trading Co. is your comprehensive business partner, offering a diverse range of services from global logistics to automotive solutions. Our commitment to excellence drives every aspect of our operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard 
              icon={<Car className="w-8 h-8" />}
              title="Car Sales & Rentals"
              description="Premium automotive solutions including new and pre-owned vehicle sales, flexible rental options, and comprehensive vehicle maintenance services."
            />
            <ServiceCard 
              icon={<Truck className="w-8 h-8" />}
              title="Global Freight Solutions"
              description="Comprehensive air and sea freight services with real-time tracking, specialized handling, and express shipping options for time-critical deliveries."
            />
            <ServiceCard 
              icon={<Package className="w-8 h-8" />}
              title="Cargo Management"
              description="Expert handling of general and specialized cargo, with advanced security protocols and efficient customs clearance services."
            />
            <ServiceCard 
              icon={<Globe className="w-8 h-8" />}
              title="Supply Chain Solutions"
              description="End-to-end supply chain management, optimizing your logistics operations with cutting-edge technology and industry expertise."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-32 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80"
                alt="Logistics operations"
                className="w-full h-[300px] md:h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-light mb-6 md:mb-8">Global Reach & Expertise</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 md:mb-12">
                With our strategic location in Dubai's Sabkha Area, we provide seamless logistics solutions across international markets. Our advanced tracking systems and experienced team ensure efficient handling of your shipments from origin to destination.
              </p>
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                <Stat value="50+" label="Global Routes" />
                <Stat value="24/7" label="Tracking Support" />
                <Stat value="99.9%" label="Delivery Success" />
                <Stat value="15K+" label="Monthly Shipments" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 md:mb-8">Let's Connect</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 md:mb-12">
                Ready to explore how we can help your business thrive in the global market?
              </p>
              <div className="space-y-6 md:space-y-8">
                <ContactInfo 
                  icon={<Phone className="w-5 h-5" />}
                  info="+971551984438"
                />
                <ContactInfo 
                  icon={<Mail className="w-5 h-5" />}
                  info="ngombimbassijeanclaude@gmail.com"
                />
                <ContactInfo 
                  icon={<MapPin className="w-5 h-5" />}
                  info="Sabkha Area, Dubai, UAE"
                />
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-4 py-2 text-white rounded-md transition-colors duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-2 text-green-600">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-2 text-red-600">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6 md:mb-8">
                <div className="relative w-12 md:w-16 h-12 md:h-16 flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt="Jean-Claude General Trading Co. Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg md:text-xl tracking-wide">Jean-Claude General Trading Co.</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                Your trusted partner in global logistics and shipping solutions. Connecting businesses worldwide with reliable and efficient freight services.
              </p>
            </div>
            <div className="space-y-6 md:space-y-0">
              <h3 className="text-sm uppercase tracking-widest mb-4 md:mb-8">Navigation</h3>
              <ul className="space-y-3 md:space-y-4 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-6 md:space-y-0">
              <h3 className="text-sm uppercase tracking-widest mb-4 md:mb-8">Contact</h3>
              <ul className="space-y-3 md:space-y-4 text-gray-400">
                <li>+971551984438</li>
                <li>ngombimbassijeanclaude@gmail.com</li>
                <li>Sabkha Area, Dubai, UAE</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 md:mt-16 pt-6 md:pt-8 text-center text-gray-400">
            <p>&copy; 2025 Jean-Claude General Trading Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="group bg-white p-12 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-2xl mb-4">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <div className="text-3xl font-light mb-2">{value}</div>
      <div className="text-sm text-gray-600 uppercase tracking-wide">{label}</div>
    </div>
  );
}

function ContactInfo({ icon, info }) {
  return (
    <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl">
      <div className="text-blue-600">{icon}</div>
      <p className="text-gray-600">{info}</p>
    </div>
  );
}

export default App;