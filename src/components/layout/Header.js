import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { BsFilterLeft } from "react-icons/bs";
import { ImSearch, ImCross } from "react-icons/im";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import List from "./List";
import Listitem from "./Listitem";
import Search from "./Search";
import Image from "./Image";
import { Link } from "react-router-dom";

const Header = () => {
  let [categoryDropShow, setCategoryDropShow] = useState(false);
  let [userDropShow, setUserDropShow] = useState(false);
  let [cartDropShow, setCartDropShow] = useState(false);
  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setCategoryDropShow(true);
      } else {
        setCategoryDropShow(false);
      }

      if (userRef.current.contains(e.target)) {
        setUserDropShow(true);
      } else {
        setUserDropShow(false);
      }

      if (cartRef.current.contains(e.target)) {
        setCartDropShow(true);
      } else {
        setCartDropShow(false);
      }
    });
  }, []);

  return (
    <div className="bg-[#F5F5F3] py-5">
      <Container>
        <Flex className="flex justify-between ">
          <div className="flex items-center">
            <Dropdown dropref={categoryRef}>
              <p className="flex cursor-pointer items-center gap-x-2.5">
                <BsFilterLeft className="text-xl" />
                <h6 className="font-regular font-dm text-sm text-[#262626]">
                  <span className="hidden lg:inline-block">Shop by Category</span>
                </h6>
              </p>
              {categoryDropShow && (
                <List className="font-regular absolute mt-4 w-[263px] bg-primary font-dm">
                  <Listitem
                    className="border-b border-solid border-[#2d2d2d] py-4 px-5 font-dm text-sm text-[#c4c4c4] duration-200 ease-in-out hover:px-8 hover:font-bold hover:text-white"
                    itemname="Accesories"
                  />
                  <Listitem
                    className="border-b border-solid border-[#2d2d2d] py-4 px-5 font-dm text-sm text-[#c4c4c4] duration-200 ease-in-out hover:px-8 hover:font-bold hover:text-white"
                    itemname="Furniture"
                  />
                  <Listitem
                    className="border-b border-solid border-[#2d2d2d] py-4 px-5 font-dm text-sm text-[#c4c4c4] duration-200 ease-in-out hover:px-8 hover:font-bold hover:text-white"
                    itemname="Electronics"
                  />
                  <Listitem
                    className="border-b border-solid border-[#2d2d2d] py-4 px-5 font-dm text-sm text-[#c4c4c4] duration-200 ease-in-out hover:px-8 hover:font-bold hover:text-white"
                    itemname="Clothes"
                  />
                  <Listitem
                    className="border-b border-solid border-[#2d2d2d] py-4 px-5 font-dm text-sm text-[#c4c4c4] duration-200 ease-in-out hover:px-8 hover:font-bold hover:text-white"
                    itemname="Bags"
                  />
                  <Listitem
                    className="border-b border-solid border-[#2d2d2d] py-4 px-5 font-dm text-sm text-[#c4c4c4] duration-200 ease-in-out hover:px-8 hover:font-bold hover:text-white"
                    itemname="Home appliances"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="relative w-auto md:w-[601px]">
            <Search
              className=" font-regular w-full py-4 px-5 font-dm text-sm placeholder:text-[#c4c4c4]"
              placeholder="Search Products"
            />
            <ImSearch className="absolute top-5 right-4 text-[#262626]" />
          </div>
          <div className="flex items-center">
            <div className="flex gap-x-10 relative ">
              <Dropdown dropref={userRef}>
                <div className="flex cursor-pointer items-center gap-x-2">
                  <FaUser className="text-[#262626]" />
                  <GoTriangleDown className="text-sm text-[#262626]" />
                </div>
                {userDropShow && (
                  <List className="font-regular absolute top-6 right-16 mt-3 w-[200px] bg-white font-dm">
                    <Listitem
                      className="flex justify-center border border-solid border-[#F0F0F0] py-4 px-5 font-dm text-sm text-[#262626] hover:bg-[#262626] hover:font-bold hover:text-white"
                      itemname="My Account"
                    />
                    <Listitem
                      className="flex justify-center border border-solid border-[#F0F0F0] py-4 px-5 font-dm text-sm text-[#262626] hover:bg-[#262626] hover:font-bold hover:text-white"
                      itemname="Log Out"
                    />
                  </List>
                )}
              </Dropdown>
              <div>
                <Dropdown className="relative" dropref={cartRef}>
                  <FaShoppingCart className="cursor-pointer text-xl text-[#262626]" />
                  {cartDropShow && (
                    <div className="absolute top-9 right-2 w-[360px] border border-solid border-[#F0F0F0] ">
                      <div className="  bg-[#F5F5F3] p-5 ">
                        <Flex className="flex gap-x-5">
                          <div>
                            <Image imgsrc="assets/images/cartImage.png" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h3 className="mb-3 font-dm text-sm font-bold text-[#262626]">
                              Black Smart Watch
                            </h3>
                            <p className="font-dm text-sm font-bold text-[#262626]">
                              $44.00
                            </p>
                          </div>
                          <div>
                            <ImCross className="absolute top-14 right-6 cursor-pointer gap-x-12 text-sm text-[#262626]" />
                          </div>
                        </Flex>
                      </div>
                      <div className="bg-white p-5">
                        <h3 className="font-regular font-dm text-base text-[#767676]">
                          Subtotal:
                          <span className="ml-2 font-bold text-primary ">
                            $44.00
                          </span>
                        </h3>
                        <div className="flex justify-between">
                          <Link
                            to="#"
                            className="mt-3 inline-block border border-solid border-primary py-4 px-10 font-dm text-sm font-bold"
                          >
                            View Cart
                          </Link>

                          <Link
                            to="#"
                            className="mt-3 inline-block border border-solid border-primary bg-primary py-4 px-10 font-dm text-sm font-bold text-white"
                          >
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </Dropdown>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
