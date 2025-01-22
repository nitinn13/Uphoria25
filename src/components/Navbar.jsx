import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ onEventsClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    if (link === 'Events') {
      onEventsClick(); // Scroll to Categories for "Events"
    }
    setIsMenuOpen(false); // Close the mobile menu on link click
  };

  return (
    <nav className="relative">
      <div className="flex flex-row items-center justify-between gap-[20vw] mx-2">
        <div className="w-24 md:w-auto">
          <img src="logo1.svg" alt="TimesLogo" className="h-auto" />
        </div>
        <div className="hidden md:block mx-auto">
          <div className="border-2 border-[#E6C373] rounded-3xl bg-[rgba(25,25,112,0.4)] text-white hover:border-gray-400">
            <ul className="flex justify-around items-center gap-6 mx-5 my-3">
              {['Home', 'Timeline', 'Events', 'Gallery', 'Sponsors', 'Contact'].map((item, index) => (
                <li key={index} className="hover:text-gray-300">
                  {item === 'Events' ? (
                    <button
                      className="text-white"
                      onClick={() => handleLinkClick(item)}
                    >
                      {item}
                    </button>
                  ) : (
                    <NavLink
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="text-white"
                    >
                      {item}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ml-auto flex items-center">
          <div className="w-24 md:w-auto ml-4 md:mr-0">
            <img src="logo2.svg" alt="TimesLogo" className="h-auto" />
          </div>
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
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-slate-900/95 backdrop-blur-sm z-50">
          <div className="border-2 border-[#E6C373] rounded-xl m-4 bg-[rgba(25,25,112,0.4)]">
            <ul className="flex flex-col items-center py-4">
              {['Home', 'Timeline', 'Events', 'Gallery', 'Sponsors', 'Contact'].map((item, index) => (
                <li key={index} className="w-full">
                  {item === 'Events' ? (
                    <button
                      className="block py-3 px-4 text-white hover:bg-slate-700/50 text-center"
                      onClick={() => handleLinkClick(item)}
                    >
                      {item}
                    </button>
                  ) : (
                    <NavLink
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="block py-3 px-4 text-white hover:bg-slate-700/50 text-center"
                    >
                      {item}
                    </NavLink>
                  )}
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
