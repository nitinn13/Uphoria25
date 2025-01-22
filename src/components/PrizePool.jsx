import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const PrizePool = () => {
    const [key, setKey] = useState(0); 

    useEffect(() => {
        const interval = setInterval(() => {
            setKey((prevKey) => prevKey + 1); 
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="flex flex-col items-center justify-center text-[#ffffff] px-4 sm:px-8">
            <div className="text-center text-2xl sm:text-3xl md:text-4xl glowing-text-light">PrizePool worth</div>
            <div className="text-center text-5xl sm:text-7xl md:text-9xl font-bold text-[#E6C373] font-charm 
                [text-shadow:0_0_5px_rgba(230,195,115,0.6),0_0_10px_rgba(230,195,115,0.4)] uppercase">
                <CountUp
                    key={key} 
                    start={0}
                    end={2000000}
                    separator=","
                    duration={2} 
                />
                +
            </div>
        </div>
    );
};

export default PrizePool;
