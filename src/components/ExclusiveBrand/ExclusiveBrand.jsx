import React from "react";
import exclusive from "../Assets/images/exclusivebrands.png";
import SectionHeader from "../SectionHeader";

const ExclusiveBrand = () => {
  return (
    <div className="w-screen max-h-max  py-8">
      <div className="w-[90%] mx-auto flex justify-center items-center flex-col">
          <SectionHeader title={"Meet Our Verified Exclusive Brands"}/>
        <div className="w-full bg-Pink grid xs:grid-cols-1 sm:grid-cols-2">
          <div className=" flex-1">
            <img className="w-full h-full object-cover" src={exclusive} alt="brand" />
          </div>
          <div className="flex-1 flex justify-center flex-col my-16 pl-10">
            <div className="mb-7 flex justify-center flex-col gap-4 text-[20px] text-textGrey font-normal">
              <h4>Exceptional Brands</h4>
              <h4>Exclusive Brands</h4>
              <h4>Verified for Quality Services</h4>
            </div>
            <div className="">
              <button className="bg-white text-base text-deepWine font-light rounded-md flex justify-center items-center py-3 px-4 shadow-md">
                learn more{" "}
                <span className="ml-3">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 17.16C4.488 17.16 0.839996 13.512 0.839996 9C0.839996 4.488 4.488 0.839996 9 0.839996C13.512 0.839996 17.16 4.488 17.16 9C17.16 13.512 13.512 17.16 9 17.16ZM9 1.8C5.016 1.8 1.8 5.016 1.8 9C1.8 12.984 5.016 16.2 9 16.2C12.984 16.2 16.2 12.984 16.2 9C16.2 5.016 12.984 1.8 9 1.8Z"
                      fill="#811141"
                    />
                    <path
                      d="M8.85601 13.656L8.18401 12.984L12.168 8.99999L8.18401 5.01599L8.85601 4.34399L13.512 8.99999L8.85601 13.656Z"
                      fill="#811141"
                    />
                    <path
                      d="M4.67999 8.51999H12.84V9.47999H4.67999V8.51999Z"
                      fill="#811141"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveBrand;
