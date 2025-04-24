import React from 'react';
import { Briefcase, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JobProps {
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
}

const jobs: JobProps[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Ltd',
    location: 'Delhi, India',
    type: 'Full-time',
    salary: '₹25L - ₹35L',
    posted: '2 days ago'
  },
  {
    title: 'HR Manager',
    company: 'Global Solutions',
    location: 'Gurgaon, India',
    type: 'Full-time',
    salary: '₹18L - ₹24L',
    posted: '3 days ago'
  },
  {
    title: 'Digital Marketing Specialist',
    company: 'MarketEdge',
    location: 'Noida, India',
    type: 'Full-time',
    salary: '₹10L - ₹15L',
    posted: '1 week ago'
  },
  {
    title: 'Finance Analyst',
    company: 'FinCorp India',
    location: 'Delhi, India',
    type: 'Contract',
    salary: '₹12L - ₹18L',
    posted: '5 days ago'
  }
];

const JobCard: React.FC<JobProps> = ({ title, company, location, type, salary, posted }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{company}</p>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-1 text-gray-500" />
              {location}
            </span>
            <span className="inline-flex items-center text-sm text-gray-600">
              <Briefcase className="h-4 w-4 mr-1 text-gray-500" />
              {type}
            </span>
            <span className="inline-flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-1 text-gray-500" />
              {posted}
            </span>
          </div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
            {salary}
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <Link
          to={`/jobs/${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-primary-700 font-medium hover:text-primary-800 inline-flex items-center"
        >
          View Details
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

const JobListings: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
          <p className="text-lg text-gray-600">
            Discover your next career opportunity with our featured job listings from top employers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/jobs"
            className="inline-flex items-center bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Jobs
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

export default JobListings;