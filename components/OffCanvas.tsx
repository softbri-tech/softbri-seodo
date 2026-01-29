
import React from 'react';

interface OffCanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

const OffCanvas: React.FC<OffCanvasProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-[100] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      ></div>
      
      {/* Menu Panel */}
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-[#304e43] text-white p-12 transition-transform duration-500 shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={onClose} className="absolute top-8 right-8 text-white hover:text-[#fac82c] transition-colors">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="mt-12">
          <img 
            src="https://themezinho.net/seodo/images/logo.png" 
            alt="Seodo" 
            className="h-10 mb-12" 
            loading="lazy"
          />
          
          <div className="space-y-8">
            <div className="mb-12">
              <h5 className="text-[#fac82c] font-bold uppercase tracking-widest text-xs mb-4">Contact Info</h5>
              <p className="text-xl font-bold mb-2">+1 (850) 344 0 66</p>
              <p className="text-white/60">organic@seodo.com.ua</p>
            </div>

            <div className="mb-12">
               <h5 className="text-[#fac82c] font-bold uppercase tracking-widest text-xs mb-4">Follow Us</h5>
               <div className="flex gap-6 text-xl">
                 <a href="#" className="hover:text-[#fac82c]">FB</a>
                 <a href="#" className="hover:text-[#fac82c]">TW</a>
                 <a href="#" className="hover:text-[#fac82c]">IG</a>
                 <a href="#" className="hover:text-[#fac82c]">YT</a>
               </div>
            </div>

            <nav className="border-t border-white/10 pt-12">
              <ul className="space-y-6 text-2xl font-bold uppercase">
                <li><a href="#" className="hover:text-[#fac82c]">What we offer</a></li>
                <li><a href="#" className="hover:text-[#fac82c]">Food & Farming</a></li>
                <li><a href="#" className="hover:text-[#fac82c]">About Us</a></li>
                <li><a href="#" className="hover:text-[#fac82c]">Our News</a></li>
                <li><a href="#" className="hover:text-[#fac82c]">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
