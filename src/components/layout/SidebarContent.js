import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";

const SidebarContent = ({ dropDown }) => {
  const [drop, setDrop] = useState(dropDown);
  const [show, setShow] = useState(false);
  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex items-center justify-between cursor-pointer"
        >
          <h3>Shop by Category</h3>
          <VscTriangleDown />
        </div>
      ) : (
        <h3 className="cursor-pointer">Shop by Category</h3>
      )}
      {show && (
        <div>
          <p>Category 1</p>
          <p>Category 1</p>
          <p>Category 1</p>
          <p>Category 1</p>
          <p>Category 1</p>
          <p>Category 1</p>
          <p>Category 1</p>
        </div>
      )}
    </div>
  );
};

export default SidebarContent;
