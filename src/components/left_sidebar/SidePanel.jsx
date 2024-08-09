import React from 'react';
import backgroundImage from '../../assets/ctp_sidemenu_banner.png';

const SidePanel = () => {
  return (
    <div className="relative h-96 md:h-screen w-full md:w-1/4 p-4">
      <div
        className="relative h-full w-full bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg flex flex-col items-center justify-center text-white p-6">
          <h2 className="text-base font-bold mt-48 mb-4 text-center">We need your help to make this event memorable and productive for our new cohort!</h2>
          <p className="mb-6 text-center">Click below if you’d like to mentor our fellows, judge projects, or make a donation so that fellows can earn prizes.</p>
          <button className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:opacity-90 text-white font-bold py-2 px-6 rounded-full transition-opacity duration-300">
            Get Involved!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
