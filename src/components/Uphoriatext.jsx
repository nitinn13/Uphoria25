import React, { useEffect, useState } from 'react'
import '../App.css'
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
    <div >
      <div className="flex justify-center items-center ">
        <img
          src="text.svg"
          alt="Uphoria2025"
          height={700}
          width={700}
          className={isPulse ? 'animate-pulse' : 'animate-minimalistic'}
        />
      </div>
      <div className='float-right'>
        <Magnet/>
      </div>
    </div>
  )
}

export default Uphoriatext