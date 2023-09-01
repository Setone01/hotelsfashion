import React from "react";
import Star from "../Assets/images/star.svg";

const TestimonialCard = ({ title, comment }) => {
  return (
    <div className="max-w-max min-h-[220px] flex justify-center flex-col bg-white p-4 rounded-2xl mx-4">
      <div className="flex justify-between mb-3">
        <h5 className=" text-deepWine text-base font-semibold capitalize">
          {title}
        </h5>
        <span className="flex justify-center items-center">
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
        </span>
      </div>
      <div className=" mb-3">
        <p className="text-base text-textGrey font-light leading-6">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
