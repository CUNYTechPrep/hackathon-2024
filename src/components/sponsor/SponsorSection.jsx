import React, { useState, useEffect } from 'react';
import lyftLogo from '../../assets/Lyft-Logo.wine.png'; 
import asanaLogo from '../../assets/asana-1.png';      
import diversityLogo from '../../assets/diversity.png'; 
import linkedinLogo from '../../assets/eac0bafd30d0d8d0ccb98dbc3779bbb2.png'; 

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
    <div className="w-full p-6 mt-1 rounded-lg shadow-lg bg-opacity-75" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
      {/* Special Thanks Section */}
      <h3 className="text-2xl font-bold text-center text-white mb-4">
        Special Thanks to Our Sponsors!
      </h3>

      {/* Sponsor Images Container */}
      <div className="hidden md:flex justify-center space-x-4">
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor.src}
            alt={sponsor.alt}
            className="h-16 md:h-20 lg:h-24 object-contain"
            style={{ filter: 'drop-shadow(2px 4px 6px black)' }}
          />
        ))}
      </div>

      {/* Mobile View: Rotating Sponsor */}
      <div className="md:hidden flex justify-center mt-4">
        <img
          src={sponsors[currentSponsorIndex].src}
          alt={sponsors[currentSponsorIndex].alt}
          className="h-16 md:h-20 lg:h-24 object-contain"
          style={{ filter: 'drop-shadow(2px 4px 6px black)' }}
        />
      </div>
    </div>
  );
};

export default SponsorSection;