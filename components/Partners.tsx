
import React from 'react';

const Partners: React.FC = () => {
  const logos = Array(6).fill(null).map((_, i) => `https://themezinho.net/seodo/images/logo0${i + 1}.png`);

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#fac82c] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Consultative partners</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#304e43] uppercase max-w-4xl mx-auto leading-tight">
            Partners who share their knowledge and experience in agriculture
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
               <img 
                 src={logo} 
                 alt="Partner" 
                 className="h-10 object-contain" 
                 loading="lazy"
               />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
