
import React, { useState } from 'react';

const Timeline: React.FC = () => {
  const [activeYear, setActiveYear] = useState(2000);
  const [isAnimating, setIsAnimating] = useState(false);

  const timelineData: Record<number, { title: string; content: string }> = {
    2000: {
      title: "Farming in the Middle Ages",
      content: "Wild flowers, plants and fungi are the life support for all our wildlife and their colour and character light up our landscapes. But without our help, this priceless natural heritage is in danger of being lost."
    },
    2004: {
      title: "The Industrial Revolution",
      content: "Mechanization began to transform agriculture. New tools and techniques allowed farmers to produce more food with less labor, shifting the population from rural fields to urban centers."
    },
    2008: {
      title: "Modern Sustainable Practices",
      content: "A renewed focus on sustainability emerged. Farmers began adopting crop rotation and organic fertilizers to preserve soil health and reduce environmental impact for future generations."
    },
    2012: {
      title: "Technology in Agriculture",
      content: "Precision farming technologies, including GPS and data analytics, started enabling farmers to optimize field-level management, maximizing efficiency while minimizing waste."
    },
    2016: {
      title: "Vertical Farming Rise",
      content: "Urban areas saw the rise of vertical farming solutions. Hydroponics and aeroponics allowed for year-round crop production in controlled environments, reducing water usage significantly."
    },
    2020: {
      title: "AI and Robotics Era",
      content: "Artificial intelligence and autonomous robots are now revolutionizing the industry. From automated harvesting to real-time crop monitoring, the future of farming is smarter than ever."
    }
  };

  const handleYearChange = (year: number) => {
    if (year === activeYear) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveYear(year);
      setIsAnimating(false);
    }, 300); // Wait for fade out
  };

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#304e43] uppercase mb-4">The Openfield Timeline</h2>
          <div className="w-24 h-1 bg-[#fac82c] mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-16 border-b border-gray-200 pb-8">
          {Object.keys(timelineData).map(yearStr => {
            const year = parseInt(yearStr);
            return (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`text-2xl font-bold transition-all duration-300 px-4 py-2 rounded-lg ${
                  activeYear === year 
                    ? 'text-[#304e43] scale-110 bg-white shadow-md' 
                    : 'text-gray-300 hover:text-gray-500'
                }`}
              >
                {year}
              </button>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center min-h-[200px]">
          <div className={`transition-all duration-300 transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <h3 className="text-3xl font-bold uppercase text-[#304e43] mb-6">
              {timelineData[activeYear].title} ({activeYear})
            </h3>
            <p className="text-gray-500 leading-relaxed italic text-lg">
              "{timelineData[activeYear].content}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
