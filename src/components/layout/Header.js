import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { BsFilterLeft } from "react-icons/bs";
import List from "./List";
import Listitem from "./Listitem";

const Header = () => {
  let [show, setShow] = useState(false);
  let ref = useRef()

  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
        console.log(ref.current)
        if(ref.current.contains(e.target)){
            setShow(true)
        }else{
            setShow(false)
        }
    })
  },[])

  return (
    <div className="bg-[#F5F5F3]">
      <Container>
        <Flex>
          <div className="flex justify-between ">
            <Dropdown dropref={ref}>
              <p className="flex items-center gap-x-2.5">
                <BsFilterLeft className="text-xl" />
                <h6 className="font-dm font-regular text-sm text-[#262626]">
                  Shop by Category
                </h6>
              </p>
              {show && (
                <List className="absolute w-[263px] bg-primary mt-2.5">
                  <Listitem className="py-4 px-5 hover:px-8 text-[#c4c4c4] border border-solid border-[#2d2d2d] hover:text-white ease-in-out duration-300" itemname="Accesories" />
                  <Listitem className="py-4 px-5 hover:px-8 text-[#c4c4c4] border border-solid border-[#2d2d2d] hover:text-white ease-in-out duration-300" itemname="Furniture" />
                  <Listitem className="py-4 px-5 hover:px-8 text-[#c4c4c4] border border-solid border-[#2d2d2d] hover:text-white ease-in-out duration-300" itemname="Electronics" />
                  <Listitem className="py-4 px-5 hover:px-8 text-[#c4c4c4] border border-solid border-[#2d2d2d] hover:text-white ease-in-out duration-300" itemname="Clothes" />
                  <Listitem className="py-4 px-5 hover:px-8 text-[#c4c4c4] border border-solid border-[#2d2d2d] hover:text-white ease-in-out duration-300" itemname="Bags" />
                  <Listitem className="py-4 px-5 hover:px-8 text-[#c4c4c4] border border-solid border-[#2d2d2d] hover:text-white ease-in-out duration-300" itemname="Home appliances" />
                </List>
              )}
            </Dropdown>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
