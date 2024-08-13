import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dc from '../../assets/dc.png';

const Countdown = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2024-08-19T00:00:00"); // Replace with your target date
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const timeLeft = calculateTimeLeft();
            setTimeLeft(timeLeft);

            // Check if the countdown has expired
            if (Object.keys(timeLeft).length === 0) {
                setIsExpired(true);
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            className="flex flex-col md:flex-row items-center justify-center min-w-screen bg-center mt-7 overflow-hidden"
            id="hacks24"
        >
            {/* Conditional content based on expiration */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center text-white border-4 border-white p-8 rounded-lg bg-black bg-opacity-30 mb-4 md:mb-0 md:mr-4 md:h-80 w-full"
            >
                {isExpired ? (
                    <>
                        <motion.h1 
                            className="text-5xl font-bold mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            DevPost Now Available!
                        </motion.h1>
                        <motion.p 
                            className="text-lg mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2 }}
                        >
                            Be sure to have all members sign up and register to the team's project along with a description of the idea.
                        </motion.p>
                        <motion.button 
                            className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:opacity-90 text-white font-bold py-2 px-6 rounded-full transition-opacity duration-300"
                            onClick={() => window.open('https://ctp-hacks-2024.devpost.com/', '_blank')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Go to DevPost
                        </motion.button>
                    </>
                ) : (
                    <>
                        <motion.h1 
                            className="text-5xl font-bold mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            COMING SOON!
                        </motion.h1>
                        <motion.div 
                            className="flex space-x-6 text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2 }}
                        >
                            <div className="flex flex-col items-center">
                                <motion.span 
                                    className="text-6xl font-bold"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror' }}
                                >
                                    {timeLeft.days || '0'}
                                </motion.span>
                                <span>Days</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <motion.span 
                                    className="text-6xl font-bold"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror' }}
                                >
                                    {timeLeft.hours || '0'}
                                </motion.span>
                                <span>Hours</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <motion.span 
                                    className="text-6xl font-bold"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror' }}
                                >
                                    {timeLeft.minutes || '0'}
                                </motion.span>
                                <span>Minutes</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <motion.span 
                                    className="text-6xl font-bold"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror' }}
                                >
                                    {timeLeft.seconds || '0'}
                                </motion.span>
                                <span>Seconds</span>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="text-sm italic text-gray-400 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.4 }}
                        >
                            Theme Hint: CUNY "Essential Needs for Student Success"
                        </motion.div>
                    </>
                )}
            </motion.div>
            
            {/* Discord Invite */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center bg-black bg-opacity-70 p-8 rounded-lg shadow-lg border-4 border-white text-white md:h-80"
            >
                <motion.h2 
                    className="text-2xl text-nowrap font-normal mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Learn More.
                </motion.h2>
                <motion.img 
                    src={dc} 
                    alt="CTP Hacks" 
                    className="w-32 h-32 rounded-full mb-4 shadow-lg" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                />
                <motion.button 
                    className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:opacity-90 text-white font-bold py-2 px-6 rounded-full transition-opacity duration-300"
                    onClick={() => window.open('https://discord.gg/qdTbTPsx', '_blank')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Join Discord
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Countdown;
