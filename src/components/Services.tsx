import React from 'react';
import { Users, Clock, Search, Building, Award, BarChart } from 'lucide-react';
import { Link } from './ui/Link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, href }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-100 text-primary-700 mb-4 group-hover:bg-primary-700 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={href}
        className="text-primary-700 font-medium inline-flex items-center group-hover:text-primary-800"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Recruitment Services
          </h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive recruitment solutions tailored to your business needs. Our
            expertise spans across various industries and roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Users className="h-8 w-8" />}
            title="Permanent Staffing"
            description="Find the perfect full-time employees for your organization across all levels from entry to executive positions."
            href="/services/permanent-staffing"
          />
          <ServiceCard
            icon={<Clock className="h-8 w-8" />}
            title="Contract Staffing"
            description="Flexible workforce solutions for project-based needs, seasonal demands, or temporary positions."
            href="/services/contract-staffing"
          />
          <ServiceCard
            icon={<Search className="h-8 w-8" />}
            title="Executive Search"
            description="Specialized headhunting for C-suite executives, directors, and senior management roles."
            href="/services/executive-search"
          />
          <ServiceCard
            icon={<Building className="h-8 w-8" />}
            title="RPO Solutions"
            description="Recruitment Process Outsourcing to manage your entire hiring process efficiently and cost-effectively."
            href="/services/rpo-solutions"
          />
          <ServiceCard
            icon={<Award className="h-8 w-8" />}
            title="Campus Recruitment"
            description="Source fresh talent directly from universities and colleges to build your pipeline of future leaders."
            href="/services/campus-recruitment"
          />
          <ServiceCard
            icon={<BarChart className="h-8 w-8" />}
            title="HR Consulting"
            description="Expert guidance on talent strategy, compensation benchmarking, and HR best practices."
            href="/services/hr-consulting"
          />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;