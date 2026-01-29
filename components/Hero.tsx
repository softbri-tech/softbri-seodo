
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const Hero: React.FC = () => {
  const slides = [
    {
      title: "What’s Things in Season?",
      subtitle: "Your Guide to Eating Seasonally",
      bg: "https://picsum.photos/id/11/1920/1080"
    },
    {
      title: "Sustainable Farming Future",
      subtitle: "Join our green initiative today",
      bg: "https://picsum.photos/id/12/1920/1080"
    },
    {
      title: "Real Results Virtual Farm",
      subtitle: "Innovative technology for growers",
      bg: "https://picsum.photos/id/13/1920/1080"
    }
  ];

  return (
    <section className="relative h-[85vh] w-full overflow-hidden group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        fadeEffect={{ crossFade: true }}
        navigation={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="h-full w-full hero-swiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative overflow-hidden">
            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
            
            {/* Background Image with Zoom on Hover */}
            {/* We use a separate div for the background so the text doesn't scale with it */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out transform scale-100 hover:scale-110" 
              style={{ backgroundImage: `url(${slide.bg})` }}
            ></div>

            {/* Slide Content */}
            <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-24 pointer-events-none">
              <div className="max-w-4xl pointer-events-auto">
                <h5 className="hero-subtitle text-[#fac82c] text-lg font-bold tracking-[0.2em] uppercase mb-4 opacity-0 translate-y-[-20px]">
                  {slide.subtitle}
                </h5>
                <h1 className="hero-title text-white text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight mb-8 opacity-0 translate-y-[40px]">
                  {slide.title}
                </h1>
                <div className="hero-btn opacity-0 translate-y-[20px]">
                  <a 
                    href="#" 
                    className="inline-block bg-[#fac82c] text-[#304e43] px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    See all tips
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        /* Animations trigger when the slide becomes active */
        .swiper-slide-active .hero-subtitle {
          animation: slideDownFade 0.8s ease-out 0.3s forwards;
        }
        .swiper-slide-active .hero-title {
          animation: slideUpFade 0.8s ease-out 0.5s forwards;
        }
        .swiper-slide-active .hero-btn {
          animation: slideUpFade 0.8s ease-out 0.7s forwards;
        }

        @keyframes slideDownFade {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Custom Swiper Navigation Styles */
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: white !important;
          background: rgba(255, 255, 255, 0.1);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        .hero-swiper .swiper-button-next:hover,
        .hero-swiper .swiper-button-prev:hover {
          background: #fac82c;
          color: #304e43 !important;
          transform: scale(1.1);
        }
        .hero-swiper .swiper-button-next:after,
        .hero-swiper .swiper-button-prev:after {
          font-size: 24px;
          font-weight: bold;
        }
        
        /* Pagination dots */
        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
          transition: all 0.3s;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: #fac82c !important;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Hero;
