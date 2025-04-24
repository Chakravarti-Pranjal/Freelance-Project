import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled ? 'bg-white shadow-md ' : 'bg-white '
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-700">
              <span className="text-primary-900">LO</span>GO
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-primary-700 font-medium">
              Home
            </Link>
            <Link to="/employer" className="text-gray-800 hover:text-primary-700 font-medium">
              Employer
            </Link> 
            <Link to="/job" className="text-gray-800 hover:text-primary-700 font-medium">
              Job Opportunities
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-primary-700 font-medium">
              Recruitment
            </Link>
            <Link to="/jobs" className="text-gray-800 hover:text-primary-700 font-medium">
              Submit Resume
            </Link> 
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-primary-700 text-white px-4 py-2 rounded-md hover:bg-primary-800 transition-colors flex items-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white rounded-md shadow-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/employer"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-md"
              >
                Employer
              </Link>
              
              <Link
                to="/job"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-md"
              >
                Job Opportunities
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-md"
              >
                Recruitment
              </Link>
              <Link
                to="/jobs"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-md"
              >
                Submit Resume
              </Link>
              
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium bg-primary-700 text-white rounded-md hover:bg-primary-800"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;