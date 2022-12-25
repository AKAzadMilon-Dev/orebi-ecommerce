import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "./Image";

const Banner = () => {
  let [dotsActive, setDotsActive] = useState(0);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setDotsActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "6%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotsActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "10px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "#262626",
                borderRight: "3px white solid",
                padding: "10px 0",
                color: "transparent",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "25%",
                left: "2%",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotsActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                    }
                  : {
                      width: "30px",
                      color: "#262626",
                      borderRight: "3px white solid",
                      color: "transparent",
                      cursor: "pointer",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div className=" outline-none w-full ">
        <Image imgsrc="assets/images/banner.png" />
      </div>
      <div className=" outline-none w-full ">
        <Image imgsrc="assets/images/banner.png" />
      </div>
      <div className=" outline-none w-full ">
        <Image imgsrc="assets/images/banner.png" />
      </div>
    </Slider>
  );
};

export default Banner;
