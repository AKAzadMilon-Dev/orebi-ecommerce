import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import { Link } from "react-router-dom";

const Advertise = () => {
  return (
    <div className="mt-10 md:mt-36">
      <Container>
        <Flex className="flex gap-x-4 md:gap-x-10">
          <div className="max-w-2/4">
            <Link to="#">
              <Image imgsrc="assets/images/ad1.png" />
            </Link>
          </div>
          <div className="max-w-2/4">
            <Link to="#">
              <Image imgsrc="assets/images/ad2.png" />
            </Link>
            <Link to="#" className="mt-2 md:mt-8 inline-block">
              <Image imgsrc="assets/images/ad3.png" />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Advertise;
