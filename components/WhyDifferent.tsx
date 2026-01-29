
import React from 'react';

const WhyDifferent: React.FC = () => {
  const points = [
    "We are straight forward to deal with experts in our field.",
    "We take responsible lending seriously and believe.",
    "If we can’t help you, we will tell you quickly and honestly.",
    "You can talk directly to a lending decision maker.",
    "We offer a no-nonsense app roach and speak farming.",
    "Loan officers have practical experience of building."
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold text-[#304e43] uppercase mb-12">Why we're different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {points.map((p, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-gray-100 text-[#fac82c] rounded-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://picsum.photos/id/102/800/600" 
            alt="Farm tools" 
            className="shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
            loading="lazy"
          />
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#fac82c]/10 -z-10 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
