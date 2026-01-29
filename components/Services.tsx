
import React from 'react';

const Services: React.FC = () => {
  const services = [
    { title: "Organic Fertiliser", icon: "https://themezinho.net/seodo/images/icon08.png" },
    { title: "Farm Mechanization", icon: "https://themezinho.net/seodo/images/icon09.png" },
    { title: "Water Management", icon: "https://themezinho.net/seodo/images/icon10.png" }
  ];

  const desc = "Wild flowers, plants and fungi are the life support for all our wildlife and their colour and character light up our landscapes.";

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#fac82c] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">What we do</span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#304e43] uppercase">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((svc, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 mb-8 bg-gray-50 rounded-full flex items-center justify-center transition-all duration-700 ease-in-out group-hover:bg-[#304e43] group-hover:shadow-xl transform group-hover:rotate-[360deg] group-hover:scale-110">
                <img 
                  src={svc.icon} 
                  alt={svc.title} 
                  className="w-12 h-12 brightness-0 group-hover:brightness-100 invert group-hover:invert-0 transition-all duration-700" 
                  loading="lazy"
                />
              </div>
              <h4 className="text-2xl font-bold uppercase mb-4 text-[#304e43] transition-colors duration-300 group-hover:text-[#fac82c]">{svc.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
