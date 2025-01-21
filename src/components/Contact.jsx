import React from 'react';

const Contact = () => {
  return (
    <div className="relative w-full bg-slate-900/50 backdrop-blur-sm">
      {/* Main content wrapper with padding and glass effect */}
      <div className="relative border-b border-blue-500 pb-8 animate-pulse w-full px-4">
        {/* Glowing border effect */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-blue-500 shadow-lg shadow-blue-500/50"></div>

        {/* Header */}
        <h1 className="my-10 text-center text-4xl text-gray-200 animate-pulse">
          Designed With Love
        </h1>

        {/* Team title */}
        <div className="flex justify-end pr-8 pb-7 max-w-4xl ml-auto">
          <h1 className="text-lg font-semibold text-gray-200 tracking-wider">
            UPHORIA 2025 TECH TEAM
          </h1>
        </div>

        {/* Team members grid */}
        <div className="flex flex-col space-y-12 items-end pr-8 max-w-4xl ml-auto pb-12">
          {/* First Row */}
          <div className="flex space-x-16">
            {/* Team Member 1 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src="/api/placeholder/200/200"
                alt="Nitin Jha"
                className="relative rounded-full w-16 h-16 object-cover border-2 border-blue-500"
              />
            </div>

            {/* Team Member 2 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src="/api/placeholder/200/200"
                alt="Sankalp Tiwari"
                className="relative rounded-full w-16 h-16 object-cover border-2 border-purple-500"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex space-x-16">
            {/* Team Member 3 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src="/api/placeholder/200/200"
                alt="Parth Pankaj Singh"
                className="relative rounded-full w-16 h-16 object-cover border-2 border-pink-500"
              />
            </div>

            {/* Team Member 4 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src="/api/placeholder/200/200"
                alt="Saumya Singh"
                className="relative rounded-full w-16 h-16 object-cover border-2 border-purple-500"
              />
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="absolute bottom-0 left-0 w-full text-center pb-4 text-gray-400 text-sm">
          <p>© 2025 Uphoria. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;