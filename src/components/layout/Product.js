import React from "react";
import Badge from "./Badge";
import Image from "./Image";
import Flex from "./Flex";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";

const Product = ({ src, badge }) => {
  return (
    <div className="mb-5 md:mb-0">
      <div className="group relative overflow-y-hidden">
        <Image className="w-full" imgsrc={src} />
        {badge && <Badge title="New" />}
        <div className="absolute bottom-[-46%] lg:max-xl:bottom-[-73%] left-0 h-[156px] w-full bg-white duration-300 ease-in-out group-hover:bottom-0 ">
          <Flex className="mt-0 flex justify-end px-7 md:mt-5">
            <div className="flex cursor-pointer items-center gap-x-2">
              <h3 className="font-regular font-dm lg:max-xl:text-sm text-base text-[#6D6D6D] sm:text-base">
                Add to Wish List
              </h3>
              <FaHeart className="h-4 w-4 text-primary" />
            </div>
          </Flex>
          <Flex className="mt-5 flex justify-end px-7">
            <div className="flex cursor-pointer items-center gap-x-2">
              <h3 className="font-regular font-dm lg:max-xl:text-sm text-base text-[#6D6D6D] sm:text-base">
                Compare
              </h3>
              <HiRefresh className="h-4 w-4 text-primary" />
            </div>
          </Flex>
          <Flex className="mt-5 flex justify-end px-7">
            <div className="flex cursor-pointer items-center gap-x-2">
              <h3 className="font-dm text-base lg:max-xl:text-sm font-bold text-[#6D6D6D] sm:text-base">
                Add to Cart
              </h3>
              <FaShoppingCart className="h-4 w-4 text-primary" />
            </div>
          </Flex>
        </div>
      </div>
      <div>
        <div className="mt-6 mb-4 flex items-center justify-between">
          <h3 className="font-dm md:text-base lg:text-xl text-regular font-bold text-primary lg:max-xl:text-sm">
            Basic Crew Neck Tee
          </h3>
          <p className="font-regular font-dm text-[#767676] lg:max-xl:text-sm">
            $ 44.00
          </p>
        </div>
        <p className="font-regular mt-2 font-dm text-[#767676] md:mt-0 lg:max-xl:text-sm">
          Black
        </p>
      </div>
    </div>
  );
};

export default Product;
