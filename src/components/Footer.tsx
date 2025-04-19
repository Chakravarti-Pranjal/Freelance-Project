import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from './ui/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-secondary-400">NLB</span> Services
            </div>
            <p className="text-gray-300 mb-6">
              A leading recruitment agency providing end-to-end staffing solutions across diverse
              industries. Connecting the right talent with the right opportunities.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-primary-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-300 hover:text-white transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-primary-800 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/permanent-staffing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Permanent Staffing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/contract-staffing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contract Staffing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/executive-search"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Executive Search
                </Link>
              </li>
              <li>
                <Link
                  href="/services/rpo-solutions"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  RPO Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/campus-recruitment"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Campus Recruitment
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hr-consulting"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  HR Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-primary-800 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-secondary-400 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Business Park, Sector 62, Noida, Delhi NCR - 201301, India
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-secondary-400 flex-shrink-0" />
                <span className="text-gray-300">+91 11 4567 8900</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-secondary-400 flex-shrink-0" />
                <span className="text-gray-300">info@nlbservices.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-primary-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} NLB Services. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 text-sm hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 text-sm hover:text-white">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 text-sm hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;