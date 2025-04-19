import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import JobListings from './components/JobListings';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <JobListings />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;