import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const RoomCard = ({image, title, location, rating, status, cost }) => {
  return (
    <div className="max-w-max flex justify-center items-center border-[1.5px] border-gray-400 rounded-md p-2 shadow-md z-20">
      <div className="">
        <div className="">
          <img className="w-full h-full object-cover" src={image} alt="vine" />
        </div>
        <div className="flex justify-center flex-col mt-2 gap-1">
          <h6 className="text-[12px] text-textGrey font-bold capitalize tracking-wider">
            {title}
          </h6>
          <div className="flex justify-between items-center text-xs font-normal">
            <div className="flex justify-center items-center text-xs text-textGrey">
              <span>
                <HiLocationMarker />
              </span>
              <p className="capitalize track">{location}</p>
            </div>
            <div className="flex justify-center items-center text-xs gap-2">
              <div className="">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.9271 0.695722L6.48599 5.86696L1.02432 6.69889C0.0448775 6.84731 -0.347645 8.10887 0.362634 8.83144L4.31403 12.8544L3.37945 18.5373C3.21123 19.5645 4.24674 20.3339 5.11403 19.8535L10 17.1702L14.886 19.8535C15.7533 20.33 16.7888 19.5645 16.6206 18.5373L15.686 12.8544L19.6374 8.83144C20.3476 8.10887 19.9551 6.84731 18.9757 6.69889L13.514 5.86696L11.0729 0.695722C10.6355 -0.226039 9.36823 -0.237757 8.9271 0.695722Z"
                    fill="#FFDE33"
                  />
                </svg>
              </div>
              <small className="text-xs text-textGrey">{rating}</small>
            </div>
          </div>
          <span className="italic capitalize text-xs text-deepWine">
            {status}
          </span>
          <div className="text-xs text-lightGrey">
            <h5>
              From <span className="font-semibold">£{cost}</span> /day
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
