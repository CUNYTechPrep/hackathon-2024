import React, { useState, useEffect } from 'react';
import cntdwn_bk from '../../assets/cntdwn_bk.png'; 
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

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            className="flex flex-col md:flex-row items-center justify-center min-w-screen  bg-center p-4 overflow-hidden"
            // style={{ backgroundImage: `url(${cntdwn_bk})` }}
        >
            {/* countdown clock */}
            <div className="flex flex-col items-center justify-center text-white border-4 border-white p-8 rounded-lg bg-black bg-opacity-30 mb-4 md:mb-0 md:mr-4 md:h-80 w-full">
                <h1 className="text-5xl font-bold mb-6">COMING SOON!</h1>
                <div className="flex space-x-6 text-xl">
                    <div className="flex flex-col items-center">
                        <span className="text-6xl font-bold">{timeLeft.days || '0'}</span>
                        <span>Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-6xl font-bold">{timeLeft.hours || '0'}</span>
                        <span>Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-6xl font-bold">{timeLeft.minutes || '0'}</span>
                        <span>Minutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-6xl font-bold">{timeLeft.seconds || '0'}</span>
                        <span>Seconds</span>
                    </div>
                </div>
                <div className="text-sm italic text-gray-400 mt-4">
                    Theme Hint: CUNY "Essential Needs for Student Success"
                </div>
            </div>
            
            {/* Discord Invite */}
            <div className="flex flex-col items-center bg-black bg-opacity-70 p-8 rounded-lg shadow-lg border-4 border-white text-white md:h-80">
                <h2 className="text-2xl text-nowrap font-normal mb-4">Learn More.</h2>
                <img src={dc} alt="CTP Hacks" className="w-32 h-32 rounded-full mb-4 shadow-lg" />
                <button className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:opacity-90 text-white font-bold py-2 px-6 rounded-full transition-opacity duration-300">
                    Join Discord
                </button>
            </div>
        </div>
    );
};

export default Countdown;
