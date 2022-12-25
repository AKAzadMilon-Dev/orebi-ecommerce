import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Image from "./Image";

const Advertisement = () => {
  return (
    <div className="mt-32">
      <Container>
        <Link to="#">
          <Image imgsrc="assets/images/advertisement.png" />
        </Link>
      </Container>
    </div>
  );
};

export default Advertisement;
