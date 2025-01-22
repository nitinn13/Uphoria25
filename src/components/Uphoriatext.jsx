import React, { useEffect, useState } from 'react';
import '../App.css';
import Magnet from './Magnet';

const Uphoriatext = () => {
  const [isPulse, setIsPulse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPulse(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  px-4 md:px-8">
      <div className="flex justify-center items-center w-full">
        <img
          src="text.svg"
          alt="Uphoria2025"
          className={`transition-all ${
            isPulse ? 'animate-pulse' : 'animate-minimalistic'
          }`}
          style={{
            height: 'auto',
            maxHeight: '70vh', // Ensures image doesn't exceed screen height
            maxWidth: '100%', // Ensures image scales within the viewport width
          }}
        />
      </div>
      <div className="mt-6 md:mt-8 lg:mt-10 w-full flex justify-end">
        <Magnet />
      </div>
    </div>
  );
};

export default Uphoriatext;
