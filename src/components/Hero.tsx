import React from 'react';
import { Search } from 'lucide-react';
import { Link } from './ui/Link';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-[65px] font-bold leading-tight">
              Finding the <span className="text-secondary-400">perfect talent</span> <br className='hidden md:block' /> for your business
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              NLB Services is a leading recruitment agency in Delhi providing end-to-end staffing
              solutions across diverse industries. We connect the right talent with the right
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-secondary-600 hover:bg-secondary-700 text-white py-3 px-6 rounded-md font-medium transition-colors text-center"
              >
                Hire Talent
              </Link>
              <Link
                href="/jobs"
                className="bg-white hover:bg-gray-100 text-primary-900 py-3 px-6 rounded-md font-medium transition-colors text-center"
              >
                Find Jobs
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-0 bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
            <div className="bg-white rounded-md shadow-lg p-6">
              <h3 className="text-primary-900 text-xl font-bold mb-4">Find Your Dream Job</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
                    Keywords
                  </label>
                  <input
                    type="text"
                    id="keywords"
                    placeholder="Job title, skills, or company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    placeholder="City, state, or region"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <button className="w-full bg-primary-700 hover:bg-primary-800 text-white py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center">
                  <Search className="mr-2 h-4 w-4" /> Search Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 flex flex-wrap justify-between items-center gap-6">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold">15+</p>
            <p className="text-gray-200">Years of Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold">10k+</p>
            <p className="text-gray-200">Successful Placements</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold">500+</p>
            <p className="text-gray-200">Client Companies</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold">20+</p>
            <p className="text-gray-200">Industries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;