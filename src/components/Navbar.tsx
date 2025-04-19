import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Link } from './ui/Link';

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
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-800 hover:text-primary-700 font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-primary-700 font-medium">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 origin-top-left z-50">
                <Link
                  href="/services/permanent-staffing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                >
                  Permanent Staffing
                </Link>
                <Link
                  href="/services/contract-staffing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                >
                  Contract Staffing
                </Link>
                <Link
                  href="/services/executive-search"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                >
                  Executive Search
                </Link>
              </div>
            </div>
            <Link href="/industries" className="text-gray-800 hover:text-primary-700 font-medium">
              Industries
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-primary-700 font-medium">
              About Us
            </Link>
            <Link href="/jobs" className="text-gray-800 hover:text-primary-700 font-medium">
              Jobs
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-primary-700 font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
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
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-md"
              >
                Home
              </Link>
              <div>
                <button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-md">
                  Services
                </button>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/services/permanent-staffing"
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-md"
                  >
                    Permanent Staffing
                  </Link>
                  <Link
                    href="/services/contract-staffing"
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-md"
                  >
                    Contract Staffing
                  </Link>
                  <Link
                    href="/services/executive-search"
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-md"
                  >
                    Executive Search
                  </Link>
                </div>
              </div>
              <Link
                href="/industries"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-md"
              >
                Industries
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-md"
              >
                About Us
              </Link>
              <Link
                href="/jobs"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-md"
              >
                Jobs
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-md"
              >
                Contact
              </Link>
              <Link
                href="/contact"
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