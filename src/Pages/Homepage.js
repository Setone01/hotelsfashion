import React from "react";
import Hero from "../components/Hero/Hero";
import Trending from "../components/Trending/Trending";
import ExclusiveBrand from "../components/ExclusiveBrand/ExclusiveBrand";
import AvailableHotel from "../components/AvailHotel/AvailableHotel";
import Testimonial from "../components/Testimonial/Testimonial";
import Brand from "../components/Brand/Brand";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <Brand/>
      <ExclusiveBrand/>
      <AvailableHotel />
      <Testimonial/>
    </div>
  );
};

export default Homepage;
