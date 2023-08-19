import React from "react";
import Hero from "../components/Hero/Hero";
import Trending from "../components/Trending/Trending";
import ExclusiveBrand from "../components/ExclusiveBrand/ExclusiveBrand";
import AvailableHotel from "../components/AvailHotel/AvailableHotel";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <ExclusiveBrand/>
      <AvailableHotel/>
    </div>
  );
};

export default Homepage;
