import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const LeftSidebarItem = (props) => {
  const [drop, setDrop] = useState(props.subDropDwon);
  const [show, setShow] = useState(false);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex cursor-pointer items-center justify-between border-b border-solid border-[#F0F0F0] py-5"
        >
          <h3 className="forn-regular cursor-pointer font-dm text-base text-textColor">
            {props.color && (
              <span
                className="mr-2 inline-block h-3 w-3 rounded-full"
                style={{ background: props.color }}
              ></span>
            )}

            {props.title}
          </h3>
          {show ? (
            <AiOutlineMinus className="text-textColor" />
          ) : (
            <AiOutlinePlus className="text-textColor" />
          )}
        </div>
      ) : (
        <div className="flex cursor-pointer items-center justify-between border-b border-solid border-[#F0F0F0] py-5">
          <h3 className="forn-regular cursor-pointer font-dm text-base text-textColor">
            {props.color && (
              <span
                className="mr-2 inline-block h-3 w-3 rounded-full"
                style={{ background: props.color }}
              ></span>
            )}

            {props.title}
          </h3>
        </div>
      )}
      {show && <div>{props.children}</div>}
    </div>
  );
};

export default LeftSidebarItem;
