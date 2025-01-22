import React from 'react';

const Footer = () => {
  return (
    <div className="relative w-full bg-slate-900/50 backdrop-blur-sm mt-4 sm:mt-[-35vh]">
      <div className="relative border-b border-blue-500 pb-3 animate-pulse w-full">
        <div className="absolute inset-x-0 bottom-0 h-px bg-blue-500 shadow-lg shadow-blue-500/50"></div>

        <div className="flex flex-col gap-6 sm:flex-row w-full px-4 sm:px-7">
          {/* Address Section */}
          <div className="flex-shrink-0">
            <h1 className="text-lg font-semibold text-gray-200 tracking-wider">
              Bennett University
              <h2 className="font-normal">
                Plot Nos 8, 11, TechZone 2,<br />
                Greater Noida, Uttar Pradesh 201310
              </h2>
            </h1>
          </div>

          {/* Developers Section */}
          <div className="flex-grow">
            <div className="flex flex-col items-center sm:items-end">
              <h1 className="font-sans mb-3">Developed By:</h1>
              <div className="flex space-x-2">
                {/* All developers in one row */}
                <a href="https://www.linkedin.com/in/nitin-kumar-jha" target="_blank" rel="noopener noreferrer">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <img src="/nitin.jpg" alt="Nitin Jha" className="relative rounded-full w-12 h-12 object-cover border-2 border-blue-500" />
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/parth-singh427" target="_blank" rel="noopener noreferrer">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <img src="/parth.jpg" alt="Parth Pankaj Singh" className="relative rounded-full w-12 h-12 object-cover border-2 border-purple-500" />
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/parth-singh427" target="_blank" rel="noopener noreferrer">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <img src="/soumya.jpg" alt="Soumya Singh" className="relative rounded-full w-12 h-12 object-cover border-2 border-pink-500" />
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/sankalp-tiwari-" target="_blank" rel="noopener noreferrer">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <img src="/sankalp.png" alt="Sankalp Tiwari" className="relative rounded-full w-12 h-12 object-cover border-2 border-purple-500" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full text-center pb-4 text-gray-400 text-sm">
          <p>© 2025 Uphoria. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;