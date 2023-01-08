import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import LeftSidebarItem from "./LeftSidebarItem";

const SidebarContent = ({ dropDown }) => {
  const [drop, setDrop] = useState(dropDown);
  const [show, setShow] = useState(false);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex cursor-pointer items-center justify-between"
        >
          <h3>Shop by Category</h3>
          <VscTriangleDown />
        </div>
      ) : (
        <h3 className="cursor-pointer">Shop by Category</h3>
      )}
      {show && (
        <div>
          <LeftSidebarItem />
          <LeftSidebarItem />
          <LeftSidebarItem />
          <LeftSidebarItem />
          <LeftSidebarItem />
        </div>
      )}
    </div>
  );
};

export default SidebarContent;
