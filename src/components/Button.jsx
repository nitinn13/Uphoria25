import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative border-2 border-[#E6C373] rounded-3xl bg-gradient-to-r from-[#393939] to-[#1a237e] text-white 
                 p-2 px-9 py-5 mx-5 text-xl overflow-hidden transition-all duration-300 ease-in-out 
                 hover:bg-gradient-to-r hover:from-[#1a237e] hover:to-[#E6C373] hover:scale-110 hover:shadow-lg 
                 hover:shadow-[rgba(230,195,115,0.6)] focus:outline-none"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c] to-[#1a237e] opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-20"></span>
      <span className="relative z-10">{label}</span>
    </button>
  );
};

export default Button;
