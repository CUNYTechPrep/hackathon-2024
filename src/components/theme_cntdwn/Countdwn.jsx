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
            className="flex items-center justify-center min-w-screen bg-cover bg-center overflow-hidden p-4"
            style={{ backgroundImage: `url(${cntdwn_bk})` }}
        >
            {/* countdown clock */}
            <div className="flex justify-between items-center w-full max-w-screen-xl px-6 py-8">
                <div className="flex flex-col h-80 items-center justify-center text-white border-4 border-white p-8 rounded-lg bg-black bg-opacity-40">
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
                <div className="flex flex-col items-center bg-black bg-opacity-70 p-8 rounded-lg shadow-lg border-4 border-white text-white ml-4">
                    <h2 className="text-3xl font-medium mb-4">Learn More...</h2>
                    <img src={dc} alt="CTP Hacks" className="w-32 h-32 rounded-full mb-4 shadow-lg" />
                    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-300 font-bold">
                        Join Discord
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Countdown;