import React from "react";
import PropTypes from "prop-types";

const Button = ({ 
  children, 
  size = "md", 
  variant = "primary", 
  onClick, 
  disabled = false, 
  className = "" 
}) => {
  // Define size classes
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Define variant classes
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizeClasses[size]} 
        ${variantClasses[variant]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        rounded font-medium transition duration-300 ${className}
      `}
    >
      {children}
    </button>
  );
};

// Define prop types
Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "success"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
