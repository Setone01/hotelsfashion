import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const RoomCard = ({ image, title, location, rating, status, cost }) => {
  return (
    <div className="w-full min-h-[300px] flex justify-center items-center border-[1.5px] border-gray-400 rounded-lg p-3 shadow-md z-20">
      <div className="w-full">
        <div className="relative w-full">
          <div className="w-full min-h-[150px] bg-deepGrey">
            <img
              className="w-full h-full object-cover rounded-t-lg shadow-sm"
              src={image}
              alt="vine"
            />
          </div>

          <div className="absolute top-[15%] right-2">
            <span className=" hover:bg-deepWine cursor-pointer">
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.6667 1.33331C15.4 1.33331 13 4.88931 13 6.66665C13 4.88931 10.6 1.33331 6.33333 1.33331C2.06667 1.33331 1 4.88931 1 6.66665C1 16 13 22.6666 13 22.6666C13 22.6666 25 16 25 6.66665C25 4.88931 23.9333 1.33331 19.6667 1.33331Z"
                  fill="black"
                  fill-opacity="0.3"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>

          <div className="absolute flex w-full items-center justify-between top-[50%]">
            <span className=" ml-2 flex items-center justify-center w-8 h-8 bg-white/80 rounded-full">
              <svg
                width="11"
                height="16"
                viewBox="0 0 11 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.42858 15.5C9.31616 15.5012 9.2047 15.4818 9.10137 15.4431C8.99803 15.4043 8.90511 15.3471 8.82858 15.275L1.11429 8.525C0.771433 8.225 0.771433 7.76 1.11429 7.46L8.82858 0.725C9.17143 0.425 9.70286 0.425 10.0457 0.725C10.3886 1.025 10.3886 1.49 10.0457 1.79L2.93143 8L10.0457 14.225C10.3886 14.525 10.3886 14.99 10.0457 15.29C9.87429 15.44 9.65143 15.515 9.44572 15.515L9.42858 15.5Z"
                  fill="#202020"
                />
              </svg>
            </span>
            <span className=" mr-2 flex items-center justify-center w-8 h-8 bg-white/80 rounded-full">
              <svg
                width="11"
                height="16"
                viewBox="0 0 11 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.57143 15.5C1.45901 15.5012 1.34756 15.4818 1.24422 15.443C1.14089 15.4043 1.04797 15.347 0.97143 15.275C0.628573 14.975 0.628573 14.51 0.97143 14.21L8.08572 7.98498L0.97143 1.77499C0.628573 1.47499 0.628573 1.00999 0.97143 0.709985C1.31429 0.409985 1.84572 0.409985 2.18857 0.709985L9.88572 7.47499C10.2286 7.77499 10.2286 8.23998 9.88572 8.53998L2.17143 15.275C2 15.425 1.77714 15.5 1.57143 15.5Z"
                  fill="#202020"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex justify-center flex-col mt-2 gap-1">
          <h6 className="text-[14px] text-textGrey font-semibold capitalize">
            {title}
          </h6>
          <div className="flex justify-between items-center text-sm font-normal">
            <div className="flex justify-center items-center  text-textGrey">
              <span>
                <HiLocationMarker size={17} />
              </span>
              <p className="capitalize font-light">{location}</p>
            </div>
            <div className="flex justify-center items-center text-xs gap-2">
              <div className="w-full">
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
