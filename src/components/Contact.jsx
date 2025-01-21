import React from 'react';
import profilePic from "../assets/kevinRushProfile.png"

const Contact = () => {
  return (
    <div className="relative border-b border-blue-500 mb-24 pb-8 animate-pulse">
      {/* Adding a pseudo-element glow effect to the border using box shadow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-blue-500 shadow-lg shadow-blue-500/50"></div>
      
      <h1 className="my-10 text-center text-4xl text-gray-200 animate-pulse">
        Designed With Love
      </h1>
      <div className="flex flex-col space-y-12 items-end pr-8 pb-7 max-w-4xl ml-auto">
            <h1 className="text-lg font-semibold text-gray-200">UPHORIA 2025 TECH TEAM</h1>

        </div>


      <div className="flex flex-col space-y-12 items-end pr-8 max-w-4xl ml-auto">
        {/* First Row */}
        <div className="flex space-x-16">
          {/* Team Member 1 */}

          <div className="flex items-center space-x-4">
            {/* <h1 className="text-lg font-semibold text-gray-200">Nitin Jha</h1> */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src={profilePic}
                alt="Nitin Jha"
                className="relative rounded-full w-16 h-16 object-cover border-2 border-blue-500"
              />
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex items-center space-x-4">
            {/* <h1 className="text-lg font-semibold text-gray-200">Sankalp Tiwari</h1> */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src={profilePic}
                alt="Sankalp Tiwari"
                className="relative rounded-full w-16 h-16 object-cover border-2 border-purple-500"
              />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex space-x-16">
          {/* Team Member 3 */}
          <div className="flex items-center space-x-4">
            {/* <h1 className="text-lg font-semibold text-gray-200">Parth Pankaj Singh</h1> */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src={profilePic}
                alt="Parth Pankaj Singh"
                className="relative rounded-full w-16 h-16 object-cover border-2 border-pink-500"
              />
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="flex items-center space-x-4">
            {/* <h1 className="text-lg font-semibold text-gray-200">Saumya Singh</h1> */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src={profilePic}
                alt="Saumya Singh"
                className="relative rounded-full w-16 h-16 object-cover border-2 border-purple-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;