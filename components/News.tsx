
import React from 'react';

const News: React.FC = () => {
  const news = [
    { title: "Farming, Food and You", date: "Dec 26, 2020", cta: "Join the conversation", img: "https://picsum.photos/id/21/600/800" },
    { title: "You Follow the Food?", date: "Dec 25, 2020", cta: "Watch Now", img: "https://picsum.photos/id/22/600/800" },
    { title: "Making Life Easier", date: "Dec 24, 2020", cta: "Join the conversation", img: "https://picsum.photos/id/23/600/800" }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Source of our food</span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#304e43] uppercase">Agricultural communities News</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-[450px] overflow-hidden mb-6">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  loading="lazy"
                />
                <div className="absolute top-6 left-6 bg-[#fac82c] text-[#304e43] px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
                  {item.date}
                </div>
              </div>
              <h4 className="text-2xl font-bold uppercase text-[#304e43] mb-4 hover:text-[#fac82c] transition-colors">{item.title}</h4>
              <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-black transition-colors">{item.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
