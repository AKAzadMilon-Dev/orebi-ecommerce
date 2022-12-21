import React from "react";
import Additionalinfo from "../components/layout/Additionalinfo";
import Advertise from "../components/layout/Advertise";
import Banner from "../components/layout/Banner";
import Newarrivals from "../components/layout/Newarrivals";

const Home = () => {
  return (
    <>
      <Banner />
      <Additionalinfo />
      <Advertise/>
      <Newarrivals/>
    </>
  );
};

export default Home;
