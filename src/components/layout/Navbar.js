import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import Image from "./Image";
import List from "./List";
import Listitem from "./Listitem";
import { BsList } from "react-icons/bs";

const Navbar = () => {
    let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      console.log(window.innerWidth);
      if (window.innerWidth < 769) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);
  return (
    <nav>
      <div className=" max-w-container mx-auto p-2.5 ">
        <Flex className="lg:flex items-center">
          <div className="lg:w-3/12">
            <Image imgsrc="assets/images/logo.png" />
          </div>
          <div className="lg:w-9/12">
            <BsList
              onClick={() => setShow(!show)}
              className=" block lg:hidden ml-auto text-2xl cursor-pointer absolute top-2 right-0"
            />
            {show && (
              <List className="lg:flex lg:justify-end lg:gap-x-10 mt-2 lg:mt-0 ">
                <Listitem
                  className="font-dm font-bold text-sm hover:font-bold text-[#767676] cursor-pointer my-3 lg:my-0"
                  itemname="Home"
                />
                <Listitem
                  className="font-dm font-regular text-sm hover:font-bold text-[#767676] cursor-pointer my-3 lg:my-0"
                  itemname="Shop"
                />
                <Listitem
                  className="font-dm font-regular text-sm hover:font-bold text-[#767676] cursor-pointer my-3 lg:my-0"
                  itemname="About"
                />
                <Listitem
                  className="font-dm font-regular text-sm hover:font-bold text-[#767676] cursor-pointer my-3 lg:my-0"
                  itemname="Contact"
                />
                <Listitem
                  className="font-dm font-regular text-sm hover:font-bold text-[#767676] cursor-pointer my-3 lg:my-0"
                  itemname="Journal"
                />
              </List>
            )}
          </div>
        </Flex>
      </div>
    </nav>
  )
}

export default Navbar