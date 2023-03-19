import React from "react";

const Button = ({ title }) => {
  return (
    <button className="mt-2 bg-primary py-4 px-20 font-dm text-base font-bold text-white">
      {title}
    </button>
  );
};

export default Button;
