// The hero section for landing page
import { HERO } from '../../constants/content';
import temp from '../../assets/temp.png';
import banner from '../../assets/banner.png';
import './Hero.css';

const Hero = () => {
  return (
    // Hero banner contain description on leftside and img rightside using flex-box with flex-strap property. If viewed on mobile device than orientation of description top and img bottom.
    <section className="flex flex-col min-h-screen items-center">
    {/* Banner */}
    <div className="w-full">
      <img src={banner} alt="Hackathon theme banner" className="w-full" />
    </div>

    {/* Greet Section */}
    <div className="w-full text-center mt-8 mb-12">
      <h1 className="p-2 text-4xl font-bold md:text-5xl lg:text-6xl">
        {HERO.greet}
      </h1>
    </div>

    {/* Hero Content */}
    <div className="flex flex-col md:flex-row w-full items-center">
      {/* Description Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-4">
        <h2 className="mb-4 text-3xl tracking-tighter lg:text-4xl">
          {HERO.intro}
        </h2>
        <div className="left-scrollbar-container">
          <p className="text-lg left-scrollbar text-left">
            {HERO.description}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center p-4">
        <img
          src={temp}
          alt="CTP 2024 Cohort 10 group photo"
          className="rounded-3xl object-cover w-full max-w-full h-auto md:h-96"
        />
      </div>
    </div>
  </section>
);
};

export default Hero;