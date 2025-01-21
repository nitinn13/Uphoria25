// src/components/Button.js
import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="border-2 border-white rounded-3xl bg-[rgba(25,25,112,0.4)] text-white p-2 px-9 py-5 mx-5 text-xl">
      {label}
    </button>
  );
};

export default Button;
