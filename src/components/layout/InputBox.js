import React from "react";

const InputBox = (props) => {
  return (
    <div className="mb-6">
      <h3 className="py-2.5 font-dm text-base font-bold text-primary">
        {props.title}
      </h3>
      <props.as
        type={props.type}
        placeholder={props.placeholder}
        className="placeholder:font-regular font-regular w-full border-b border-solid border-[#F0F0F0] pb-4 font-dm text-base outline-none placeholder:font-dm placeholder:text-base placeholder:text-textColor md:w-[40%] "
      />
    </div>
  );
};

export default InputBox;
