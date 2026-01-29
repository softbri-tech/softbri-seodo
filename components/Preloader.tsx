
import React from 'react';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#304e43] transition-all duration-700 ${!isLoading ? 'opacity-0 pointer-events-none translate-y-[-100%]' : 'opacity-100'}`}>
      <div className="flex flex-col items-center">
        <img 
          src="https://themezinho.net/seodo/images/logo.png" 
          alt="Seodo Logo" 
          className="w-48 mb-8 animate-pulse"
        />
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-[#fac82c] animate-[loading_1.5s_infinite_linear]"></div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { width: 0%; left: 0%; }
          50% { width: 100%; left: 0%; }
          100% { width: 0%; left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
