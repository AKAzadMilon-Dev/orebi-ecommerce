import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import LeftSidebarItem from "./LeftSidebarItem";

const SidebarContent = ({ dropDown, dropTitle, data }) => {
  const [drop, setDrop] = useState(dropDown);
  const [show, setShow] = useState(dropDown);

  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex cursor-pointer items-center justify-between py-5"
        >
          <h3 className="cursor-pointer font-dm text-xl font-bold text-primary">
            {dropTitle}
          </h3>
          <VscTriangleDown />
        </div>
      ) : (
        <h3 className="cursor-pointer py-5 font-dm text-xl font-bold text-primary">
          {dropTitle}
        </h3>
      )}
      {show && (
        <div>
          {data.map((item) => (
            <LeftSidebarItem
              subDropDwon={item.subcategory ? true : false}
              title={item.name}
            >
              {item.subcategory &&
                item.subcategory.map((subitem) => (
                  <p className="font-regular cursor-pointer border-b border-solid border-[#F0F0F0] py-5 font-dm text-base text-textColor">
                    {subitem.name}
                  </p>
                ))}
            </LeftSidebarItem>
          ))}
        </div>
      )}
      {!drop && (
        <div>
          {data.map((item, index) => (
            <LeftSidebarItem
              subDropDwon={item.subcategory ? true : false}
              title={`Colors ${index+1}`}
              color={item.name}
            >
              {item.subcategory &&
                item.subcategory.map((subitem) => (
                  <p className="font-regular cursor-pointer border-b border-solid border-[#F0F0F0] py-5 font-dm text-base text-textColor">
                    {subitem.name}
                  </p>
                ))}
            </LeftSidebarItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarContent;
