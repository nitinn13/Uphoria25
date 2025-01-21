import React, { useState } from 'react';

const Navbar = () => {
<<<<<<< HEAD
  const [isMenuOpen, setIsMenuOpen] = useState(false);
=======
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
>>>>>>> 3b7a2b125ac876aeaf9d448a5ab4fdfc77908eba

  return (
    <nav className="relative">
      {/* Desktop and Mobile Main Bar */}
      <div className='flex flex-row items-center'>
        {/* Left Logo */}
        <div className="w-24 md:w-auto">
          <img src="logo1.svg" alt="TimesLogo" className="h-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block mx-auto">
          <div className="border-2 border-[#E6C373] rounded-3xl bg-[rgba(25,25,112,0.4)] text-white hover:border-gray-400">
            <ul className="flex flex-wrap justify-around items-center gap-7 mx-5 my-3">
              {['Events', 'Timeline', 'About', 'Contact', 'Gallery'].map((item, index) => (
                <li key={index} className="hover:text-gray-300">
                  <a href="#" aria-label={`Navigate to ${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Logo and Mobile Menu Button Container */}
        <div className="ml-auto flex items-center">
          <div className="w-24 md:w-auto ml-4 md:mr-0">
            <img classname=" " src="logo2.svg" alt="TimesLogo" className="h-auto" />
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-8 text-white p-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden  absolute w-full bg-slate-900/95 backdrop-blur-sm z-50">
          <div className="border-2 border-[#E6C373] rounded-xl m-4 bg-[rgba(25,25,112,0.4)]">
            <ul className="flex flex-col items-center py-4">
              {['Events', 'Timeline', 'About', 'Contact', 'Gallery'].map((item, index) => (
                <li key={index} className="w-full">
                  <a
                    href="#"
                    className="block py-3 px-4 text-white hover:bg-slate-700/50 text-center"
                    aria-label={`Navigate to ${item}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;