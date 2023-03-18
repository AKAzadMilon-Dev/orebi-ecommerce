import React from "react";
import { TfiAngleRight } from "react-icons/tfi";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title }) => {
  return (
    <div>
      <h1 className="mt-32 font-dm text-5xl font-bold text-primary first-letter:uppercase">
        {window.location.pathname.split("/")[1]}
      </h1>
      <p className="font-regular mt-3 flex items-center gap-x-2 font-dm text-xs text-[#767676]">
        <Link to="/">Home</Link> <TfiAngleRight />{" "}
        {window.location.pathname.split("/")[1]}
      </p>
    </div>
  );
};

export default BreadCrumb;
