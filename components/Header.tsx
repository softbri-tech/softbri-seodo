
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenOffCanvas: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenOffCanvas }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'What We Offer',
      dropdown: [{ label: 'Services and Offers', link: '#' }, { label: 'Campaigns', link: '#' }]
    },
    {
      label: 'Food & Farming',
      dropdown: [{ label: 'Explore Farming', link: '#' }, { label: 'Our Work', link: '#' }, { label: 'Farming Issues', link: '#' }]
    },
    { label: 'News', link: '#' },
    { label: 'About', link: '#' },
    { label: 'Contact', link: '#' }
  ];

  return (
    <header className="w-full z-50 transition-all duration-300 absolute top-0 left-0">
      {/* Top Bar - Hidden on scroll for clean look */}
      <div className={`bg-[#243b32] text-white py-2 px-4 md:px-12 text-xs flex justify-between items-center hidden md:flex transition-all duration-300 overflow-hidden ${isSticky ? 'h-0 py-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div>That’s right, we only sell 100% organic</div>
        <div className="flex gap-6 items-center">
          <div className="flex gap-4">
            <span className="opacity-60">Follow us</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-[#fac82c]" aria-label="Facebook">Facebook</a>
              <a href="#" className="hover:text-[#fac82c]" aria-label="Twitter">Twitter</a>
              <a href="#" className="hover:text-[#fac82c]" aria-label="Instagram">Instagram</a>
            </div>
          </div>
          <div className="font-bold border-l border-white/10 pl-6">+1 (850) 344 0 66</div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-500 w-full ${isSticky ? 'fixed top-0 bg-[#304e43] shadow-xl py-3 animate-[slideDown_0.3s_ease-out]' : 'relative bg-[#304e43] py-6'} px-4 md:px-12 flex justify-between items-center z-50`}>
        <div className="flex items-center gap-12">
          <a href="/" className="shrink-0 block group">
            <img src="https://themezinho.net/seodo/images/logo.png" alt="Seodo Agriculture" className="h-8 md:h-10 transition-transform duration-300 group-hover:scale-105" />
          </a>
          
          <ul className="hidden lg:flex gap-8 items-center text-white font-medium uppercase text-sm tracking-widest">
            {navItems.map((item, idx) => (
              <li key={idx} className="group relative py-2">
                <a href={item.link || '#'} className="hover:text-[#fac82c] flex items-center gap-1 transition-colors">
                  {item.label}
                  {item.dropdown && (
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  )}
                </a>
                {item.dropdown && (
                  <ul className="absolute left-0 top-full bg-white text-gray-800 py-4 w-56 shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 rounded-b-lg border-t-4 border-[#fac82c]">
                    {item.dropdown.map((sub, sidx) => (
                      <li key={sidx}>
                        <a href={sub.link} className="block px-6 py-3 hover:bg-gray-50 hover:text-[#304e43] hover:pl-8 transition-all duration-200 text-xs font-bold uppercase tracking-wider">{sub.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={onOpenOffCanvas}
          className="text-white hover:text-[#fac82c] transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-[#fac82c] rounded-lg"
          aria-label="Open Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </nav>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};

export default Header;
