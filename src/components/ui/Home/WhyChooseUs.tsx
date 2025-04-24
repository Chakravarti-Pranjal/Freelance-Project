import React from 'react';
import { Shield, Target, Users, Clock, Globe, Award } from 'lucide-react';

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-4 p-6 bg-white rounded-lg shadow-md">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Team meeting"
              className="rounded-lg shadow-lg object-cover h-full w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose NLB Services?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in the recruitment industry, we have established
              ourselves as a trusted partner for businesses across Delhi NCR and beyond. Here's why
              clients and candidates choose us:
            </p>
            <div className="grid grid-cols-1 gap-4">
              <ReasonCard
                icon={<Shield className="h-6 w-6" />}
                title="Industry Expertise"
                description="Our recruiters specialize in specific industries, ensuring deep understanding of your talent needs."
              />
              {/*<ReasonCard
                icon={<Target className="h-6 w-6" />}
                title="Tailored Approach"
                description="We customize our recruitment strategy to align with your unique requirements and company culture."
              />*/}
              <ReasonCard
                icon={<Users className="h-6 w-6" />}
                title="Qualified Candidates"
                description="Our rigorous screening process ensures you only interview candidates who are the right fit."
              />
              {/*<ReasonCard
                icon={<Clock className="h-6 w-6" />}
                title="Quick Turnaround"
                description="We understand urgency and pride ourselves on efficient recruitment cycles."
              />*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;