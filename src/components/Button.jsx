import React from "react";

const Button = ({ label, onClick, className = "btn-primary" }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
