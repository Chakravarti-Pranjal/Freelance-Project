import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-20 bg-[url('/assets/employer.png')] bg-cover bg-center bg-no-repeat  shadow-lg text-white md:h-[36rem]">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 justify-center gap-8 items-center mt-10 md:mt-48">
          <div className="space-y-6 md:pr-8">
            <div className='bg-[#BDD530] py-1 px-10 w-28'></div>
            <h1 className="text-4xl md:text-5xl lg:text-[65px] font-bold leading-tight">
              Submit Your Resume
            </h1>
           
            <p className='text-xl font-semibold mt-6'>
              Submit your resume to connect with top employers and discover exciting job <br /> opportunities tailored for you.
            </p>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default Hero;