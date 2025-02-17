import React, { useState } from 'react';
import { Building2, Globe, Truck, Package, Phone, Mail, MapPin } from 'lucide-react';
import logo from './assets/jclogo-removebg.png';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
            alt="Global logistics and shipping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <nav className="relative z-10 flex items-center justify-between px-4 md:px-12 py-6 md:py-8">
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
        {isMobileMenuOpen && (
          <div className="absolute z-20 top-20 left-0 right-0 bg-black bg-opacity-90 md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-white text-sm tracking-widest uppercase hover:text-gray-300 transition-colors duration-300"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white text-sm tracking-widest uppercase hover:text-gray-300 transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white text-sm tracking-widest uppercase hover:text-gray-300 transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        )}

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
            <h2 className="text-4xl md:text-5xl font-light mb-6 md:mb-8">Logistics Excellence</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At Jean-Claude General Trading Co., we specialize in comprehensive logistics solutions that connect businesses across global markets. Our state-of-the-art shipping and freight services ensure your cargo reaches its destination safely and on time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
              description="End-to-end supply chain optimization, warehouse management, and distribution services tailored to your business needs."
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
                  info="+971521699776"
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
            <form className="bg-white p-6 md:p-12 rounded-3xl shadow-2xl space-y-6 md:space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 md:px-6 py-3 md:py-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>
              <button className="w-full bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl">
                Send Message
              </button>
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
                <li>+971521699776</li>
                <li>ngombimbassijeanclaude@gmail.com</li>
                <li>Sabkha Area, Dubai, UAE</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 md:mt-16 pt-6 md:pt-8 text-center text-gray-400">
            <p>&copy; 2024 Jean-Claude General Trading Co. All rights reserved.</p>
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