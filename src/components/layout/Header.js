import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { BsFilterLeft } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import List from "./List";
import Listitem from "./Listitem";
import Search from "./Search";

const Header = () => {
  let [show, setShow] = useState(false);
  let ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      console.log(ref.current);
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className="bg-[#F5F5F3] py-5">
      <Container>
        <Flex className="flex justify-between ">
          <div className="flex items-center">
            <Dropdown dropref={ref}>
              <p className="flex cursor-pointer items-center gap-x-2.5">
                <BsFilterLeft className="text-xl" />
                <h6 className="font-regular font-dm text-sm text-[#262626]">
                  Shop by Category
                </h6>
              </p>
              {show && (
                <List className="font-regular absolute mt-2.5 w-[263px] bg-primary font-dm">
                  <Listitem
                    className="border border-solid border-[#2d2d2d] py-4 px-5 font-dm text-sm text-[#c4c4c4] duration-200 ease-in-out hover:px-8 hover:font-bold hover:text-white"
                    itemname="Accesories"
                  />
                  <Listitem
                    className="border border-solid border-[#2d2d2d] py-4 px-5 font-dm text-sm text-[#c4c4c4] duration-200 ease-in-out hover:px-8 hover:font-bold hover:text-white"
                    itemname="Furniture"
                  />
                  <Listitem
                    className="border border-solid border-[#2d2d2d] py-4 px-5 font-dm text-sm text-[#c4c4c4] duration-200 ease-in-out hover:px-8 hover:font-bold hover:text-white"
                    itemname="Electronics"
                  />
                  <Listitem
                    className="border border-solid border-[#2d2d2d] py-4 px-5 font-dm text-sm text-[#c4c4c4] duration-200 ease-in-out hover:px-8 hover:font-bold hover:text-white"
                    itemname="Clothes"
                  />
                  <Listitem
                    className="border border-solid border-[#2d2d2d] py-4 px-5 font-dm text-sm text-[#c4c4c4] duration-200 ease-in-out hover:px-8 hover:font-bold hover:text-white"
                    itemname="Bags"
                  />
                  <Listitem
                    className="border border-solid border-[#2d2d2d] py-4 px-5 font-dm text-sm text-[#c4c4c4] duration-200 ease-in-out hover:px-8 hover:font-bold hover:text-white"
                    itemname="Home appliances"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="w-[601px] relative">
            <Search
              className=" font-regular w-full py-4 px-5 font-dm text-sm placeholder:text-[#c4c4c4]"
              placeholder="Search Products"
            />
            <ImSearch className="absolute top-5 right-4 " />
          </div>
          <div className="flex items-center">card</div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
