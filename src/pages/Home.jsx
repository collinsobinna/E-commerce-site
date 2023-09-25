import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import data from "../assets/data";
import Mission from "../components/Mission";
import Newsletter from "../components/Newsletter";

const Home = () => {
  console.log(data);
  return (
    <>
      <Hero />
      <Featured data={data} />
      <Mission />
      <Newsletter />
    </>
  );
};

export default Home;
