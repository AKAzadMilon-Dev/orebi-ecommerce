import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import List from "./List";
import Listitem from "./Listitem";
import Image from "./Image";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiInstagramLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className="flex">
          <div className="w-[15%]">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Home"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Shop"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="About"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Contact"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Journal1"
                href="#"
              />
            </List>
          </div>
          <div className="w-[15%]">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 1"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 2"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 3"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 4"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className="w-[15%]">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Privacy Policy"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Terms & Conditions"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Special E-shop"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Shipping"
                href="#"
              />
              <Listitem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemname="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className="flex w-[20%] justify-center">
            <div>
              <h4 className="mb-4 font-dm text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="w-[35%]">
            <div className="flex justify-center">
              <Image imgsrc="assets/images/footerlogo.png" />
            </div>
          </div>
        </Flex>
        <Flex className="flex">
          <div className="mt-14 flex w-full items-center">
            <div className="flex w-1/2 items-center gap-x-3">
              <RiFacebookFill className="h-4 w-4 text-primary" />
              <RiLinkedinFill className="h-4 w-4 text-primary" />
              <RiInstagramLine className="h-4 w-4 text-primary" />
            </div>
            <div className="flex w-1/2 justify-end">
              <p className="font-regular font-dm text-sm text-[#6D6D6D]">
                2020 Orebi Minimal eCommerce Figma Template by Adveits
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
