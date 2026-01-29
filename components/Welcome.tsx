
import React from 'react';

const Welcome: React.FC = () => {
  const teasers = [
    { name: "Square Roots", text: "Square Roots is an urban farming accelerator..." },
    { name: "Farm One", text: "Our high-tech vertical farms grow..." },
    { name: "Sky Vegetables", text: "Our high-tech vertical farms grow..." }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side */}
        <div>
          <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
            Agricultural seed market, whilst our farm traders
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-[#304e43] uppercase mb-8">Welcome</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
            Wild flowers, plants and fungi are the life support for all our wildlife and their colour and character light up our landscapes. But without our help, this priceless natural heritage is in danger of being lost.
          </p>
          <a 
            href="#" 
            className="inline-block border-2 border-gray-200 text-[#304e43] px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#304e43] hover:text-white transition-all duration-300"
          >
            More Information
          </a>
        </div>

        {/* Right Side */}
        <div className="relative flex gap-8">
          <div className="vertical-text absolute -left-12 top-1/2 -translate-y-1/2 font-bold tracking-[0.5em] text-[#fac82c] uppercase text-xs whitespace-nowrap">
            Real results virtual farm
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="space-y-8">
              <div className="relative group overflow-hidden">
                <img 
                  src="https://themezinho.net/seodo/images/image-box01.jpg" 
                  alt="Farm" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#304e43]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="bg-gray-50 p-8 border-l-4 border-[#304e43]">
                <h4 className="font-bold uppercase mb-2 text-xl">{teasers[0].name}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{teasers[0].text}</p>
              </div>
            </div>
            
            <div className="space-y-8 md:mt-12">
               {teasers.slice(1).map((item, idx) => (
                 <div key={idx} className="bg-gray-50 p-8 border-l-4 border-[#fac82c]">
                    <h4 className="font-bold uppercase mb-2 text-xl">{item.name}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                 </div>
               ))}
               <div className="relative group overflow-hidden">
                <img 
                  src="https://themezinho.net/seodo/images/image-box02.jpg" 
                  alt="Farm" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#304e43]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
