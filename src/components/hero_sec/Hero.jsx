import { HERO } from '../../constants/index';
import temp from '../../assets/temp.png';
import banner from '../../assets/banner.png';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    // Hero banner containing description on the left side and image on the right side using flex-box with flex-wrap property. 
    // If viewed on a mobile device, the orientation changes to description on top and image on the bottom.

    //id="welcome" is used to scroll to the welcome section when the user clicks on the welcome link in the navbar.
    <section className="flex flex-col min-h-screen items-center" id="welcome">
      {/* Banner */}
      <img src={banner} alt="Hackathon theme banner" className="w-full mt-14" />

      {/* Greet Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full text-center mt-5"
      >
        <h1 className="p-2 text-3xl font-extrabold md:text-4xl lg:text-5xl">
          {HERO.greet}
        </h1>
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row w-full items-center mt-10"
      >
        {/* Description Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-4">
          <h2 className="mb-4 text-2xl font-medium tracking-tighter lg:text-4xl">
            {HERO.intro}
          </h2>
          <div className="left-scrollbar-container">
            <p className="text-base left-scrollbar text-left">
              {HERO.description}
            </p>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center p-4 mt-6 md:mt-0"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={temp}
            alt="CTP 2024 Cohort 10 group photo"
            className="rounded-3xl object-cover w-full max-w-full h-auto md:h-96"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
