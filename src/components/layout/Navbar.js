import React, { useEffect, useState } from "react";
import Container from "./Container";
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
    <nav className="py-7">
      <Container className=" mx-auto max-w-container p-2.5 ">
        <Flex className="items-center lg:flex">
          <div className="lg:w-3/12">
            <Image imgsrc="assets/images/logo.png" />
          </div>
          <div className="lg:w-9/12">
            <BsList
              onClick={() => setShow(!show)}
              className=" absolute top-6 right-2 ml-auto block cursor-pointer text-2xl lg:hidden"
            />
            {show && (
              <List className="mt-2 lg:mt-0 lg:flex lg:justify-end lg:gap-x-10 ">
                <Listitem
                  className="my-3 cursor-pointer font-dm text-sm font-bold text-[#767676] hover:font-bold lg:my-0"
                  itemname="Home"
                  href="/"
                />
                <Listitem
                  className="font-regular my-3 cursor-pointer font-dm text-sm text-[#767676] hover:font-bold lg:my-0"
                  itemname="Shop"
                  href="/product"
                />
                <Listitem
                  className="font-regular my-3 cursor-pointer font-dm text-sm text-[#767676] hover:font-bold lg:my-0"
                  itemname="About"
                  href="/about"
                />
                <Listitem
                  className="font-regular my-3 cursor-pointer font-dm text-sm text-[#767676] hover:font-bold lg:my-0"
                  itemname="Contact"
                  href="/contact"
                />
                <Listitem
                  className="font-regular my-3 cursor-pointer font-dm text-sm text-[#767676] hover:font-bold lg:my-0"
                  itemname="Journal"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
