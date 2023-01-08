import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";

const LeftSidebarItem = ({ subDropDwon, title, children }) => {
  const [drop, setDrop] = useState(subDropDwon);
  const [show, setShow] = useState(false);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex cursor-pointer items-center justify-between"
        >
          <h3>{title}</h3>
          <VscTriangleDown />
        </div>
      ) : (
        <h3 className="cursor-pointer">{title}</h3>
      )}
      {show && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default LeftSidebarItem;
