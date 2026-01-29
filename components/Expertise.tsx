
import React from 'react';

const Expertise: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Block 1 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 h-[400px] lg:h-[600px] overflow-hidden">
            <img 
              src="https://themezinho.net/seodo/images/side-image01.jpg" 
              alt="Expertise 1" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <span className="text-[#fac82c] font-bold uppercase text-xs tracking-widest block mb-4">Discover nature</span>
            <h3 className="text-3xl font-bold uppercase text-[#304e43] mb-6 leading-tight">Sustainability and Climate Change</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">Wild flowers, plants and fungi are the life support for all our wildlife and their colour and character light up our landscapes.</p>
            <a href="#" className="text-[#304e43] font-bold uppercase text-xs tracking-[0.2em] border-b-2 border-gray-200 hover:border-[#fac82c] transition-all pb-1">Learn More</a>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 h-[400px] lg:h-[600px] overflow-hidden">
            <img 
              src="https://themezinho.net/seodo/images/side-image02.jpg" 
              alt="Expertise 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" 
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <span className="text-[#fac82c] font-bold uppercase text-xs tracking-widest block mb-4">Discover nature</span>
            <h3 className="text-3xl font-bold uppercase text-[#304e43] mb-6 leading-tight">Advice and farm implement</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">Wild flowers, plants and fungi are the life support for all our wildlife and their colour and character light up our landscapes.</p>
            <a href="#" className="text-[#304e43] font-bold uppercase text-xs tracking-[0.2em] border-b-2 border-gray-200 hover:border-[#fac82c] transition-all pb-1">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
