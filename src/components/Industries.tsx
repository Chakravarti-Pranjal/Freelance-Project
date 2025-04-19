import React from 'react';
import { Server, Code, Building2, Banknote, ShoppingBag, Car, Stethoscope, GraduationCap } from 'lucide-react';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, color }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 text-center">{title}</h3>
    </div>
  );
};

const Industries: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600">
            We have specialized recruiters with deep industry knowledge to help you find the perfect
            talent for your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <IndustryCard
            icon={<Server className="h-8 w-8 text-white" />}
            title="Information Technology"
            color="bg-blue-600"
          />
          <IndustryCard
            icon={<Code className="h-8 w-8 text-white" />}
            title="Software Development"
            color="bg-indigo-600"
          />
          <IndustryCard
            icon={<Building2 className="h-8 w-8 text-white" />}
            title="Real Estate & Construction"
            color="bg-yellow-600"
          />
          <IndustryCard
            icon={<Banknote className="h-8 w-8 text-white" />}
            title="Banking & Finance"
            color="bg-green-600"
          />
          <IndustryCard
            icon={<ShoppingBag className="h-8 w-8 text-white" />}
            title="Retail & E-commerce"
            color="bg-pink-600"
          />
          <IndustryCard
            icon={<Car className="h-8 w-8 text-white" />}
            title="Manufacturing & Automotive"
            color="bg-gray-700"
          />
          <IndustryCard
            icon={<Stethoscope className="h-8 w-8 text-white" />}
            title="Healthcare & Pharmaceutical"
            color="bg-red-600"
          />
          <IndustryCard
            icon={<GraduationCap className="h-8 w-8 text-white" />}
            title="Education & Training"
            color="bg-purple-600"
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="/industries"
            className="inline-flex items-center bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Learn More About Our Industry Expertise
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;