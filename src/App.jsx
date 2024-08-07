import React from 'react';
import Hero from './components/hero_sec/Hero';
import Navbar from './components/nav/Navbar';

const App = () => {
  return (
    // Fixed website background image; relative to height % and scrollbar is visible once container contents overflow height.
    <div className="relative h-full overflow-y-auto antialiased">

      {/* fixed bk img container wont scroll with content; inset-0 ensures img occupies the entire viewpoint */}
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      {/* path to our bk-img; class relative to position all child elements with z-index to ensure that the content is at the top of the webpage */}
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 conatiner mx-auto">
        
        <Navbar />
        <Hero />
        
      </div>
    </div>
  );
}

export default App;