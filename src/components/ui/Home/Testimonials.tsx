import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    content:
      "NLB Services has been our trusted recruitment partner for over 5 years. Their understanding of our industry and ability to find candidates that fit our company culture is outstanding.",
    name: "Rajiv Sharma",
    position: "HR Director",
    company: "Tech Innovations Ltd",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    content:
      "Working with NLB Services transformed our hiring process. They provided us with quality candidates who were not just skilled but also aligned with our vision and values.",
    name: "Priya Mehta",
    position: "CEO",
    company: "FinEdge Solutions",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    content:
      "The team at NLB Services is professional, responsive, and truly understands the nuances of the IT industry. Their candidates have consistently exceeded our expectations.",
    name: "Amit Patel",
    position: "CTO",
    company: "DataSphere",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Testimonials: React.FC = ({style}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={`py-16  ${style ? style : 'bg-primary-900 text-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 text-lg">
            We take pride in our client relationships and the success stories we've helped create.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto text-white">
          <div className="bg-primary-800 rounded-xl p-8 md:p-10 shadow-xl">
            <div className="flex flex-row-reverse gap-8 flex-wrap md:flex-nowrap">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-primary-600">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-xl">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-300">{testimonials[currentIndex].position}</p>
                  <p className="text-secondary-400">{testimonials[currentIndex].company}</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <svg
                  className="h-12 w-12 text-primary-700 mb-4 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  {testimonials[currentIndex].content}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-secondary-500' : 'bg-primary-700'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;