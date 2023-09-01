import React from "react";
import client from "../Assets/images/clientbg.svg";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
// import SectionHeader from "../SectionHeader";

const Testimonial = () => {
  //react slide-slide variables
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="w-screen h-1/4 py-10 z-20"
      style={{ backgroundImage: `url(${client})` }}
    >
      <div className="w-[90vw] mx-auto">
        <div className="w-full text-textGrey font-medium flex justify-center items-center flex-col mb-7 flex-nowrap">
          <h1 className="text-3xl leading-9">
            What Our Clients Are Saying About Us
          </h1>
        </div>
        {/* <SectionHeader title={"What Our Clients Are Saying About Us"} /> */}
        <div className="mb-8">
          <Slider {...settings}>
            <TestimonialCard
              title={"Manager, The Vineyard"}
              comment={
                "“Our collaboration with Hotels Fashion has been a game-changer for us. The unique and beautifully designed products showcased in our hotel have received an overwhelmingly positive response from our guests”"
              }
            />
            <TestimonialCard
              title={"Manager, Tobams Colors"}
              comment={
                ' "Hotels Fashion has provided an incredible platform for me to showcase my designs to a wider audience. The exposure and recognition I have gained through their hotel partnerships have been invaluable. They truly appreciate the work of designers” '
              }
            />
            <TestimonialCard
              title={" Manager, Collxx"}
              comment={
                '  "As a designer, partnering with Hotels Fashion has been a rewarding experience. The opportunity to display my products in prestigious hotels has increased my brand visibility and boosted sales. Hotels Fashion has connected me with hotel clients” '
              }
            />
            <TestimonialCard
              title={"Jumoke Ajayi (UK)"}
              comment={
                '  "Good Risk Taken. Wow always felt reluctant with risk-taking, but I call this a good risk taken as all I ordered and received are really good products. Just as seen quite recommendable. Customer Service is top- '
              }
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
