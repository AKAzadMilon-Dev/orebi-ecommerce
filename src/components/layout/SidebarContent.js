import React, { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import LeftSidebarItem from "./LeftSidebarItem";

const SidebarContent = ({ dropDown }) => {
  const [drop, setDrop] = useState(dropDown);
  const [show, setShow] = useState(dropDown);
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
          <LeftSidebarItem subDropDwon={true} title="category 1">
            <div>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={true} title="category 1">
            <div>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={true} title="category 1">
            <div>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={true} title="category 1">
            <div>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={true} title="category 1">
            <div>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
            </div>
          </LeftSidebarItem>
        </div>
      )}
      {!drop && (
        <div>
          <LeftSidebarItem subDropDwon={true} title="category 1">
            <div>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={true} title="category 2">
            <div>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={true} title="category 3">
            <div>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={true} title="category 4">
            <div>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
            </div>
          </LeftSidebarItem>
          <LeftSidebarItem subDropDwon={true} title="category 5">
            <div>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
              <p>hhkhkjhkhkjhkjh</p>
            </div>
          </LeftSidebarItem>
        </div>
      )}
    </div>
  );
};

export default SidebarContent;
