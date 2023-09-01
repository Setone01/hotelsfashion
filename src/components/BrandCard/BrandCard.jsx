import React from "react";

const BrandCard = ({ image, title, desc }) => {
  return (
    <div className="w-full min-h-[200px] flex justify-center items-center border-[1.5px] border-gray-400 rounded-lg p-3 shadow-md z-20">
      <div className="w-full">
        <div className="relative w-full">
          <div className="w-full min-h-[150px] bg-deepGrey">
            <img
              className="w-full h-full object-cover rounded-t-lg shadow-sm "
              src={image}
              alt="vine"
            />
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
        <div className="my-3">
          <h5 className="text-[14px] text-textGrey font-semibold capitalize">
            {title}
          </h5>
          <p className=" text-[12px] font-light line-clamp-2">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
