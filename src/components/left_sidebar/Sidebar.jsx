import React from 'react';
// import gif1 from '../assets/gif1.gif';
// import gif2 from '../assets/gif2.gif';
import banner from '../../assets/banner.png';
// import sponsor1 from '../../assets/sponsor1.png';
// import sponsor2 from '../../assets/sponsor2.png';

const Sidebar = () => {
  return (
    <div className="w-72 bg-white shadow-lg p-4 flex flex-col space-y-4">
      <div className="flex items-center justify-center h-40 bg-gray-200">
        <img src={gif1} alt="GIF 1" className="h-full" />
      </div>
      <div className="text-center">
        <p className="text-sm font-bold">Requirement:</p>
        <p className="text-xs">To participate in Hackathon.</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Join DevPost</button>
      </div>
      <div className="banner flex items-center justify-center h-64 text-white text-2xl font-bold" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        GET INVOLVED NOW!
      </div>
      <div className="text-center">
        <p className="text-sm">We need your help to make this event memorable and productive for our new cohort.</p>
        <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Get Involved!</button>
      </div>
      <div className="flex items-center justify-center h-40 bg-gray-200">
        <img src={gif2} alt="GIF 2" className="h-full" />
      </div>
      <div className="text-center mt-4">
        <p className="text-xs font-semibold">To our Sponsors:</p>
        <p className="text-xs">A Special Thank You!</p>
        <div className="flex items-center justify-center mt-2 space-x-4">
          <img src={sponsor1} alt="Sponsor 1" className="h-6" />
          <img src={sponsor2} alt="Sponsor 2" className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
