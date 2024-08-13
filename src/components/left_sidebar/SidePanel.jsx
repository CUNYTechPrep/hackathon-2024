import React from 'react';
import backgroundImage from '../../assets/ctp_sidemenu_banner.png';
import './SidePanel.css';

const SidePanel = () => {
  return (
    <div className="relative h-96 md:h-screen w-full md:w-1/4 p-4">
      <div
        className="relative h-full w-full bg-cover bg-center rounded-lg shadow-lg hidden-on-small"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-15 rounded-lg flex flex-col items-center justify-center text-white p-6">
          <h2 className="text-base font-bold mt-16 mb-4 text-center sm:mt-24 md:mt-32 lg:mt-48 hidden-on-small">
            We need your help to make this event memorable and productive for our new cohort!
          </h2>
          <p className="mb-6 text-center px-4 md:px-6 lg:px-8 hidden-on-small">
            Click below if you’d like to mentor our fellows, judge projects, or make a donation so that fellows can earn prizes.
          </p>
          <button 
            className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:opacity-90 text-white font-bold py-2 px-6 rounded-full transition-opacity duration-300 hidden-on-small"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeYhkdzozg2p1NpvO9eZlhr5BJegiJMOCuEYKDsIROViJHgag/viewform', '_blank')}
          >
            Get Involved!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
