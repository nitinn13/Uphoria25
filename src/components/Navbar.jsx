import React from 'react';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center gap-[20vw]'>
      <div>
        <img src="logo1.svg" alt="TimesLogo" />
      </div>
      <div className="border-2 border-[#E6C373] rounded-3xl bg-[rgba(25,25,112,0.4)] text-white hover:border-gray-400 mx-4 my-3">
        <ul className="flex flex-wrap justify-around items-center gap-7 mx-5 my-3">
          {['Events', 'Timeline', 'Gallery',  'Contact', 'Sponsors'].map((item, index) => (
            <li key={index} className="hover:text-gray-300">
              <a href={item} aria-label={`Navigate to ${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img src="logo2.svg" alt="TimesLogo" />
      </div>
    </div>

  );
};

export default Navbar;
