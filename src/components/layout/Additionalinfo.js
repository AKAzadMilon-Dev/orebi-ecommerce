import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { RiNumber2 } from "react-icons/ri";
import { FaShuttleVan, FaUndoAlt } from "react-icons/fa";

const Additionalinfo = () => {
  return (
    <div>
      <Container>
        <Flex className="flex justify-between py-5 sm:py-8">
          <div className="flex items-center gap-x-2">
            <RiNumber2 className="h-3 w-3 sm:h-5 sm:w-5 text-[#262626]" />
            <h3 className="font-regular font-dm text-[10px] sm:text-base text-[#6D6D6D]">
              Two years warranty
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <FaShuttleVan className="h-3 w-3 sm:h-5 sm:w-5 text-[#262626]" />
            <h3 className="font-regular font-dm text-[10px] sm:text-base text-[#6D6D6D]">
              Free shipping
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <FaUndoAlt className="h-3 w-3 sm:h-5 sm:w-5 text-[#262626]" />
            <h3 className="font-regular font-dm text-[10px] sm:text-base text-[#6D6D6D]">
              Return policy in 30 days
            </h3>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Additionalinfo;
