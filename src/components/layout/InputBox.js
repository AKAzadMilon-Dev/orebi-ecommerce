import React from "react";

const InputBox = (props) => {
  return (
    <div className="mb-6">
      <h3 className="py-2.5 font-dm text-base font-bold text-primary">{props.title}</h3>
      <props.as
        placeholder={props.placeholder}
        className="placeholder:font-regular placeholder:font-dm placeholder:text-base placeholder:text-textColor border-b border-solid border-[#F0F0F0] pb-4 outline-none w-full md:w-[40%] font-dm font-regular text-base "
      />
    </div>
  );
};

export default InputBox;
