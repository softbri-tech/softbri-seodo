
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Commitment from './components/Commitment';
import Stats from './components/Stats';
import Services from './components/Services';
import Expertise from './components/Expertise';
import WhyDifferent from './components/WhyDifferent';
import Timeline from './components/Timeline';
import News from './components/News';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Footer from './components/Footer';
import OffCanvas from './components/OffCanvas';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Preloader isLoading={loading} />
      
      <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <Header onOpenOffCanvas={() => setIsOffCanvasOpen(true)} />
        <OffCanvas isOpen={isOffCanvasOpen} onClose={() => setIsOffCanvasOpen(false)} />
        
        <main>
          <Hero />
          <Welcome />
          <Commitment />
          <Stats />
          <Services />
          <Expertise />
          <WhyDifferent />
          <Timeline />
          <News />
          <Testimonials />
          <Partners />
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
