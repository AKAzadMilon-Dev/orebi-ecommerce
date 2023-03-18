import React from "react";
import BreadCrumb from "../components/layout/BreadCrumb";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import Image from "../components/layout/Image";

const About = () => {
  return (
    <div>
      <Container>
        <BreadCrumb />
        <Flex className="mt-28 gap-x-10 md:flex">
          <div className="w-[2/4] cursor-pointer mb-8 md:mb-0">
            <Image className="w-full" imgsrc="assets/images/aboutimg.png" />
          </div>
          <div className="w-[2/4] cursor-pointer">
            <Image className="w-full" imgsrc="assets/images/aboutimg1.png" />
          </div>
        </Flex>
        <p className="font-regular my-10 md:my-32 font-dm text-2xl md:text-4xl md:leading-relaxed text-primary">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </p>
        <Flex className="md:flex justify-between">
          <div className="md:w-[32%] mb-6 md:mb-0">
            <h3 className="mb-3 font-dm text-2xl font-bold text-primary">
              Our Vision
            </h3>
            <p className="font-regular font-dm text-base leading-normal text-textColor">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="md:w-[32%] mb-6 md:mb-0">
            <h3 className="mb-3 font-dm text-2xl font-bold text-primary">
              Our Story
            </h3>
            <p className="font-regular font-dm text-base leading-normal text-textColor">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </p>
          </div>
          <div className="md:w-[32%]">
            <h3 className="mb-3 font-dm text-2xl font-bold text-primary">
              Our Brands
            </h3>
            <p className="font-regular font-dm text-base leading-normal text-textColor">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default About;
