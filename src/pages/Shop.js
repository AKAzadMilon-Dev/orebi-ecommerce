import React from "react";
import BreadCrumb from "../components/layout/BreadCrumb";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";

const Shop = () => {
  console.log(window.location.pathname.split("/")[1]);
  return (
    <Container>
      <BreadCrumb />
      <Flex className="mt-28 flex gap-x-10 ">
        <div className="w-1/4 bg-orange-500">abc</div>
        <div className="relative w-3/4">
          <Pagination itemsPerPage={12} />
        </div>
      </Flex>
    </Container>
  );
};

export default Shop;
