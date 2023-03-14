import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import LeftSidebarItem from "./LeftSidebarItem";

const SidebarContent = ({ dropDown, dropTitle }) => {
  const [drop, setDrop] = useState(dropDown);
  const [show, setShow] = useState(dropDown);
  return (
    <div >
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
        <h3 className="cursor-pointer font-dm text-xl font-bold text-primary py-5">
          {dropTitle}
        </h3>
      )}
      {show && (
        <div>
          <LeftSidebarItem subDropDwon={true} title="category 1" color="black">
            <div>
              <p className="border-b border-solid border-[#F0F0F0] py-5 font-regular cursor-pointer font-dm text-base text-textColor">
                hhkhkjhkhkjhkjh
              </p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={true} title="category 2" color="yellow">
            <div>
              <p className="border-b border-solid border-[#F0F0F0] py-5 font-regular cursor-pointer font-dm text-base text-textColor">
                hhkhkjhkhkjhkjh
              </p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={true} title="category 3" color="blue">
            <div>
              <p className="border-b border-solid border-[#F0F0F0] py-5 font-regular cursor-pointer font-dm text-base text-textColor">
                hhkhkjhkhkjhkjh
              </p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={true} title="category 4" color="green">
            <div>
              <p className="border-b border-solid border-[#F0F0F0] py-5 font-regular cursor-pointer font-dm text-base text-textColor">
                hhkhkjhkhkjhkjh
              </p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={true} title="category 5" color="orange">
            <div>
              <p className="border-b border-solid border-[#F0F0F0] py-5 font-regular cursor-pointer font-dm text-base text-textColor">
                hhkhkjhkhkjhkjh
              </p>
            </div>
          </LeftSidebarItem>
        </div>
      )}
      {!drop && (
        <div>
          <LeftSidebarItem subDropDwon={false} title="color 1" color="black">
            <div>
              <p className="border-b border-solid border-[#F0F0F0] py-5 font-regular cursor-pointer font-dm text-base text-textColor">
                hhkhkjhkhkjhkjh
              </p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={false} title="color 2" color="yellow">
            <div>
              <p className="border-b border-solid border-[#F0F0F0] py-5 font-regular cursor-pointer font-dm text-base text-textColor">
                hhkhkjhkhkjhkjh
              </p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={false} title="color 3" color="blue">
            <div>
              <p className="border-b border-solid border-[#F0F0F0] py-5 font-regular cursor-pointer font-dm text-base text-textColor">
                hhkhkjhkhkjhkjh
              </p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={false} title="color 4" color="green">
            <div>
              <p className="border-b border-solid border-[#F0F0F0] py-5 font-regular cursor-pointer font-dm text-base text-textColor">
                hhkhkjhkhkjhkjh
              </p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={false} title="color 5" color="orange">
            <div>
              <p className="border-b border-solid border-[#F0F0F0] py-5 font-regular cursor-pointer font-dm text-base text-textColor">
                hhkhkjhkhkjhkjh
              </p>
            </div>
          </LeftSidebarItem>
        </div>
      )}
    </div>
  );
};

export default SidebarContent;
