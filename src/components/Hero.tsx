import React from 'react';
import { Link } from './ui/Link';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-20 bg-[url('/assets/hero1.png')] bg-cover bg-center bg-no-repeat  shadow-lg text-white md:h-[32rem]">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 justify-center gap-8 items-center mt-10 md:mt-28">
          <div className="space-y-6 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-[65px] font-bold leading-tight">
              Recrutement Agency in Delhi
            </h1>
           
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#BDD530] text-white py-3 px-8  mt-10 rounded-md font-medium transition-colors text-center"
              >
                Consult Now
              </Link>
              
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default Hero;