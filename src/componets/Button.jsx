import React from "react";

const Button = ({text, className, handleEvent, type}) => {
  return (
      <button className={className} onClick={handleEvent} type={type}>{text}</button>
  );
};

export default Button;
