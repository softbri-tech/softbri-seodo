
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-4 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <img 
              src="https://themezinho.net/seodo/images/logo.png" 
              alt="Seodo" 
              className="h-8 mb-8 brightness-0 opacity-80" 
              loading="lazy"
            />
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Wild flowers, plants and fungi are the life support for all our wildlife and their colour and character light up our landscapes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-100 flex items-center justify-center hover:bg-[#304e43] hover:text-white transition-all">FB</a>
              <a href="#" className="w-10 h-10 border border-gray-100 flex items-center justify-center hover:bg-[#304e43] hover:text-white transition-all">TW</a>
              <a href="#" className="w-10 h-10 border border-gray-100 flex items-center justify-center hover:bg-[#304e43] hover:text-white transition-all">IG</a>
            </div>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-sm mb-8">Wild Plants</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#304e43]">Discover Wild Plants</a></li>
              <li><a href="#" className="hover:text-[#304e43]">Important Plant Areas</a></li>
              <li><a href="#" className="hover:text-[#304e43]">Issues of Plants</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-sm mb-8">Nature Reserves</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-[#304e43]">Ranscombe Farm</a></li>
              <li><a href="#" className="hover:text-[#304e43]">Munsary Peatlands</a></li>
              <li><a href="#" className="hover:text-[#304e43]">Cae Blaen-dyffryn</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-sm mb-8">Our Newsletter!</h5>
            <form className="flex mb-6">
              <input 
                type="email" 
                placeholder="E-mail address" 
                className="bg-gray-100 border-none px-6 py-4 w-full focus:ring-1 focus:ring-[#304e43] outline-none" 
              />
              <button className="bg-[#fac82c] text-[#304e43] px-6 font-bold uppercase text-[10px] tracking-widest">Send</button>
            </form>
            <div className="text-gray-500 text-sm font-bold">
              +1 (850) 344 0 66 <br />
              <span className="opacity-60 font-normal">organic@seodo.com.ua</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <div>© 2020 Seodo | Agriculture Farming Foundation</div>
          <div className="mt-4 md:mt-0">Site created by www.themezinho.net</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
