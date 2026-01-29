
import React from 'react';

const Commitment: React.FC = () => {
  const cards = [
    { cat: "Guidance on using green", title: "Dynamic Guidance Dunescapes", img: "https://picsum.photos/id/14/600/400" },
    { cat: "Farm management", title: "Tips for Ripening your Fruit", img: "https://picsum.photos/id/15/600/400" },
    { cat: "Healthy lifestyle", title: "Health Benefits of a Raw Food", img: "https://picsum.photos/id/16/600/400" },
    { cat: "Organic nutrition", title: "Superfoods you should be eating", img: "https://picsum.photos/id/17/600/400" },
    { cat: "Land conservation", title: "Fields of Corns Dunescapes", img: "https://picsum.photos/id/18/600/400" },
    { cat: "Modern farming", title: "Discipline Is the Name of the Game", img: "https://picsum.photos/id/19/600/400" }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#fac82c] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Presidential campaigns</span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#304e43] uppercase">Commitment to the Environment</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#304e43]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white border-b-2 border-[#fac82c] pb-1 uppercase text-xs font-bold tracking-widest">Read More</span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-[#fac82c] text-xs font-bold uppercase tracking-widest block mb-3">{card.cat}</span>
                <h3 className="text-2xl font-bold uppercase leading-tight hover:text-[#304e43] transition-colors cursor-pointer">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
