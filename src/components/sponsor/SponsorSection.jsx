import React, { useState, useEffect } from 'react';
import lyftLogo from '../../assets/Lyft-Logo.wine.png'; 
import asanaLogo from '../../assets/asana-logo.png';      
import diversityLogo from '../../assets/diversity-it-logo.png'; 
import linkedinLogo from '../../assets/LinkedIn-Logo.png'; 

const sponsors = [
  { src: lyftLogo, alt: 'Lyft' },
  { src: asanaLogo, alt: 'Asana' },
  { src: diversityLogo, alt: 'Diversity' },
  { src: linkedinLogo, alt: 'LinkedIn' },
];

const SponsorSection = () => {
  const [currentSponsorIndex, setCurrentSponsorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSponsorIndex((prevIndex) => (prevIndex + 1) % sponsors.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-4 mt-4 rounded-lg shadow-lg bg-opacity-75 bg-cover bg-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backgroundImage: `url('/path/to/your/background/image')` }}>
      {/* Special Thanks Section */}
      <h3 className="text-2xl font-bold text-center text-white mb-6">
        Special Thanks to Our Sponsors!
      </h3>

      {/* Sponsor Images Container */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor.src}
            alt={sponsor.alt}
            className="h-16 lg:h-20 xl:h-24 object-contain mx-auto"
            style={{ filter: 'drop-shadow(2px 4px 6px black)' }}
          />
        ))}
      </div>

      {/* Mobile View: Rotating Sponsor */}
      <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
        <img
          src={sponsors[currentSponsorIndex].src}
          alt={sponsors[currentSponsorIndex].alt}
          className="h-16 sm:h-20 md:h-24 object-contain"
          style={{ filter: 'drop-shadow(2px 4px 6px black)' }}
        />
      </div>
    </div>
  );
};

export default SponsorSection;
