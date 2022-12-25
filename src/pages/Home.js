import React from "react";
import Additionalinfo from "../components/layout/Additionalinfo";
import Advertise from "../components/layout/Advertise";
import Advertisement from "../components/layout/Advertisement";
import Banner from "../components/layout/Banner";
import Bestsellers from "../components/layout/Bestsellers";
import Newarrivals from "../components/layout/Newarrivals";

const Home = () => {
  return (
    <>
      <Banner />
      <Additionalinfo />
      <Advertise/>
      <Newarrivals/>
      <Bestsellers/>
      <Advertisement/>
    </>
  );
};

export default Home;
