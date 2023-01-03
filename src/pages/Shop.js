import React, { useState } from "react";
import BreadCrumb from "../components/layout/BreadCrumb";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import LeftSidwBar from "../components/layout/LeftSideBar";
import Pagination from "../components/layout/Pagination";

const Shop = () => {
  const [showNumber, setShowNumber] = useState(12);
  const handlePageChange = (e) => {
    setShowNumber(+e.target.value);
  };
  console.log(window.location.pathname.split("/")[1]);
  return (
    <Container>
      <BreadCrumb />
      <Flex className="mt-28 gap-x-10 md:flex ">
        <div className="bg-orange-500 md:w-1/4">
          <LeftSidwBar/>
        </div>
        <div className="relative md:w-3/4">
          <div className="mb-10 flex justify-end gap-x-10">
            <div className="flex items-center gap-x-4 ">
              <p className="font-regular font-dm text-xs text-[#767676]">
                Sort by:
              </p>
              <select
                id="countries"
                class=" font-regular block h-9 w-[239px] border border-[#F0F0F0] bg-gray-50 p-2.5 font-dm text-xs text-[#767676] focus:border-blue-500 focus:ring-blue-500"
              >
                <option
                  className="font-regular font-dm text-xs text-[#767676]"
                  selected
                >
                  Featured
                </option>
                <option
                  className="font-regular font-dm text-xs text-[#767676]"
                  value="US"
                >
                  United States
                </option>
                <option
                  className="font-regular font-dm text-xs text-[#767676]"
                  value="CA"
                >
                  Canada
                </option>
                <option
                  className="font-regular font-dm text-xs text-[#767676]"
                  value="FR"
                >
                  France
                </option>
                <option
                  className="font-regular font-dm text-xs text-[#767676]"
                  value="DE"
                >
                  Germany
                </option>
              </select>
            </div>
            <div className="flex items-center gap-x-4">
              <p className="font-regular font-dm text-xs text-[#767676]">
                Show:
              </p>
              <select
                id="countries"
                class="font-regular focus:border-black-500 focus:ring-black-500 block h-9 w-[139px] border border-[#F0F0F0] bg-gray-50 p-2.5 font-dm text-xs text-[#767676]"
                onChange={handlePageChange}
              >
                <option
                  className="font-regular font-dm text-xs text-[#767676]"
                  selected
                >
                  36
                </option>
                <option
                  className="font-regular font-dm text-xs text-[#767676]"
                  value="12"
                >
                  12
                </option>
                <option
                  className="font-regular font-dm text-xs text-[#767676]"
                  value="24"
                >
                  24
                </option>
                <option
                  className="font-regular font-dm text-xs text-[#767676]"
                  value="36"
                >
                  36
                </option>
                <option
                  className="font-regular font-dm text-xs text-[#767676]"
                  value="48"
                >
                  48
                </option>
              </select>
            </div>
          </div>
          <Pagination itemsPerPage={showNumber} />
        </div>
      </Flex>
    </Container>
  );
};

export default Shop;
