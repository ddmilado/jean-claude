import React from 'react';
import { Building2, Globe, Truck, Package, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
            alt="Modern corporate interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <nav className="relative z-10 flex items-center justify-between px-12 py-8">
          <div className="flex items-center space-x-3">
            <Building2 className="w-8 h-8 text-white" />
            <span className="text-white text-2xl tracking-wide">Jean-Claude International</span>
          </div>
          <div className="hidden md:flex space-x-16 text-white text-sm tracking-widest uppercase">
            <a href="#services" className="hover:text-gray-300 transition-colors duration-300">Services</a>
            <a href="#about" className="hover:text-gray-300 transition-colors duration-300">About</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors duration-300">Contact</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-start justify-center h-full px-12">
          <div className="max-w-4xl">
            <h1 className="text-[120px] font-light text-white leading-none mb-8">
              Excellence in
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-xl leading-relaxed">
              Global Trade & Logistics | Strategic Solutions | Transformative Partnerships
            </p>
            <button className="text-white text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-500 px-8 py-4 border border-white rounded-full">
              Explore Services
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-5xl font-light mb-8">Core Competencies</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Jean-Claude International, versatility is our strength. We deliver precision-engineered solutions that consistently exceed client expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Globe className="w-8 h-8" />}
              title="Import & Export Excellence"
              description="Expert handling of high-value specialized cargo with advanced security protocols and real-time monitoring systems for automotive and general cargo."
            />
            <ServiceCard 
              icon={<Truck className="w-8 h-8" />}
              title="Premium Freight Services"
              description="Ultra-rapid air transit and strategic sea freight operations with cutting-edge tracking systems and comprehensive supply chain integration."
            />
            <ServiceCard 
              icon={<Package className="w-8 h-8" />}
              title="Strategic Real Estate"
              description="Data-driven investment opportunities, comprehensive development management, and innovative property performance enhancement solutions."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-2 gap-24">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80"
                alt="Trading operations"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-5xl font-light mb-8">Our Legacy of Excellence</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                Founded on the principles of innovation and excellence, Jean-Claude International has transformed into a dynamic force in global trade. Our trajectory is defined by groundbreaking achievements and strategic expansion across international markets.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <Stat value="1000+" label="Global Partners" />
                <Stat value="50+" label="Markets Served" />
                <Stat value="15+" label="Years of Trust" />
                <Stat value="$500M+" label="Annual Volume" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl font-light mb-8">Let's Connect</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                Ready to explore how we can help your business thrive in the global market?
              </p>
              <div className="space-y-8">
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
            <form className="bg-white p-12 rounded-3xl shadow-2xl space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>
              <button className="w-full bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-4 gap-24">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <Building2 className="w-6 h-6" />
                <span className="text-xl tracking-wide">Jean-Claude International</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                Transforming Global Trade Through Innovation - Your trusted partner in international commerce and logistics excellence.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-8">Navigation</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest mb-8">Contact</h3>
              <ul className="space-y-4 text-gray-400">
                <li>+971521699776</li>
                <li>ngombimbassijeanclaude@gmail.com</li>
                <li>Sabkha Area, Dubai, UAE</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Jean-Claude International. All rights reserved.</p>
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