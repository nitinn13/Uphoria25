import React from 'react';

const Navbar = () => {
  return (
    <div className="border-2 border-white rounded-3xl bg-[rgba(25,25,112,0.4)] text-white hover:border-gray-400 mx-4 my-3">
      <ul className="flex flex-wrap justify-around items-center gap-7 mx-5 my-3">
        {['Events', 'Timeline', 'About', 'Contact', 'Gallery'].map((item, index) => (
          <li key={index} className="hover:text-gray-300">
            <a href="#" aria-label={`Navigate to ${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
