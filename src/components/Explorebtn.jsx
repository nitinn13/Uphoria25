import React from 'react';
import Magnet from './Magnet';

const Explorebtn = () => {
    return (
        <div className="border-2 border-[#E6C373] rounded-3xl bg-[rgba(25,25,112,0.4)] text-white hover:border-gray-400 mx-4 my-3">
            <Magnet padding={50} disabled={false} magnetStrength={50}>
                <p className="text-center text-lg">Explore</p>
            </Magnet>
        </div>
    );
};

export default Explorebtn;
