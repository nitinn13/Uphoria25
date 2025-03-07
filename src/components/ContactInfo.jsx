import React from 'react';

const ContactSection = () => {
  return (
    <div className="w-full p-4 flex items-center justify-center mt-[-5vh] sm:mt-[-25vh] mb-[10vh]">
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative backdrop-blur-sm rounded-xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-red-500/10"></div>
          
          {/* Border gradient */}
          <div className="absolute inset-0 border border-gradient-to-r from-blue-500/30 to-red-500/30 rounded-xl"></div>
          
          {/* Header */}
          <div className="relative p-6 sm:p-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#e6c373] animate-pulse">
              Contact Us
            </h2>
          </div>
          
          {/* Contact Information */}
          <div className="relative p-4 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Contact Person 1 */}
              <div className="space-y-3 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#F6DFAD]">
                  Ajanya Agarwal
                </h3>
                <p className="text-gray-200 hover:text-white transition-colors">
                  6397356857
                </p>
              </div>

              {/* Contact Person 2 */}
              <div className="space-y-3 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#F6DFAD]">
                  Piyush Kumar Jain
                </h3>
                <p className="text-gray-200 hover:text-white transition-colors">
                  6001279292
                </p>
              </div>

              {/* Contact Person 3 */}
              <div className="space-y-3 text-center sm:text-left lg:col-span-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#F6DFAD]">
                  Jayant Diwaker
                </h3>
                <p className="text-gray-200 hover:text-white transition-colors">
                  9871968485
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;