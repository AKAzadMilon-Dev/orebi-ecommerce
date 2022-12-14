import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Product from "./Product";
import Slider from "react-slick";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Bestsellers = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute top-[38%] right-6 !flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)]"
        style={{ ...style }}
        onClick={onClick}
      >
        <FaLongArrowAltRight className="text-2xl text-white" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="absolute top-[38%] left-0 !flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)] z-50"
        style={{ ...style }}
        onClick={onClick}
      >
        <FaLongArrowAltLeft className="text-2xl text-white" />
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mt-14 md:mt-32">
      <Container>
        <Heading title="Our Bestsellers" />
        {/* <Flex className="sm:flex sm:max-lg:flex-wrap sm:max-lg:justify-between md:gap-x-10"> */}
        <Slider {...settings}>
          <div className="md:max-lg-w-[340px] sm:max-w-[300px] lg:max-w-[370px]">
            <Product src="assets/images/best1.png" badge={true} />
          </div>
          <div className="md:max-lg-w-[340px] sm:max-w-[300px] lg:max-w-[370px]">
            <Product src="assets/images/best2.png" badge={true} />
          </div>
          <div className="md:max-lg-w-[340px] sm:max-w-[300px] lg:max-w-[370px]">
            <Product src="assets/images/best3.png" badge={true} />
          </div>
          <div className="md:max-lg-w-[340px] sm:max-w-[300px] lg:max-w-[370px]">
            <Product src="assets/images/best2.png" badge={true} />
          </div>
          <div className="md:max-lg-w-[340px] sm:max-w-[300px] lg:max-w-[370px]">
            <Product src="assets/images/best4.png" badge={true} />
          </div>
        </Slider>
        {/* </Flex> */}
      </Container>
    </div>
  );
};

export default Bestsellers;
