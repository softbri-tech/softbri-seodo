
import React from 'react';

const Testimonials: React.FC = () => {
  const features = [
    { title: "Global Sustainability Goals Launched", eyebrow: "Sustainability" },
    { title: "For Better Soleil We Care All Fields", eyebrow: "Field work" },
    { title: "Core Material of Wine Oct Black Grape", eyebrow: "Horticulture" }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-[#304e43] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8">46 Years of experience for agriculture industry</h2>
          <p className="text-white/60 text-lg leading-relaxed italic">
            "Wild flowers, plants and fungi are the life support for all our wildlife and their colour and character light up our landscapes."
          </p>
        </div>
        <div className="bg-[#243b32] p-12 relative border-l-8 border-[#fac82c]">
          <div className="text-5xl text-[#fac82c] absolute top-8 right-8 opacity-20">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V15M3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V15"></path></svg>
          </div>
          <p className="text-xl mb-6 leading-relaxed">The FoodPrint of Beef</p>
          <div className="font-bold uppercase tracking-widest text-[#fac82c]">Qlark Thomas</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <div key={idx} className="bg-white/5 p-10 hover:bg-[#fac82c] hover:text-[#304e43] transition-all duration-500 group">
            <span className="block text-[#fac82c] group-hover:text-[#304e43] font-bold uppercase text-[10px] tracking-widest mb-4 opacity-60">
              {f.eyebrow}
            </span>
            <h4 className="text-2xl font-bold uppercase mb-8">{f.title}</h4>
            <a href="#" className="font-bold uppercase text-xs tracking-[0.2em] border-b-2 border-white/20 group-hover:border-[#304e43] pb-1">More Information</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
