import React from "react";
import { Hotel } from "../Assets/dummyDB";
import RoomCard from "../RoomCard/RoomCard";
import SecctionHeader from "../SectionHeader";

const AvailableHotel = () => {
  return (
    <div className="w-screen max-h-max py-8">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-start flex-col">
          <SecctionHeader
            title={"Available Hotel Spaces"}
            desc={"Unlock Your Creative Haven: get Your Dream Space Today"}
          />
          <div className="grid grid-cols-4 gap-6 mb-5">
            {Hotel &&
              Hotel.map((data) => (
                <RoomCard
                  key={data.id}
                  image={data.img}
                  title={data.title}
                  location={data.location}
                  rating={data.rating}
                  status={data.status}
                  cost={data.cost}
                />
              ))}
          </div>
          <div className="flex justify-end">
            <button className=" flex justify-center items-center py-2 px-4">
              view all{" "}
              <span className="ml-3">
                <svg
                  width="5"
                  height="11"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.699987 11.3C0.516654 11.1167 0.424988 10.8834 0.424988 10.6C0.424988 10.3167 0.516654 10.0834 0.699987 9.90005L4.59999 6.00005L0.699987 2.10005C0.516654 1.91672 0.424988 1.68338 0.424988 1.40005C0.424988 1.11672 0.516654 0.883382 0.699987 0.700048C0.883321 0.516715 1.11665 0.425049 1.39999 0.425049C1.68332 0.425049 1.91665 0.516715 2.09999 0.700048L6.69999 5.30005C6.79999 5.40005 6.87099 5.50838 6.91299 5.62505C6.95499 5.74172 6.97565 5.86672 6.97499 6.00005C6.97499 6.13338 6.95399 6.25838 6.91199 6.37505C6.86999 6.49172 6.79932 6.60005 6.69999 6.70005L2.09999 11.3C1.91665 11.4834 1.68332 11.575 1.39999 11.575C1.11665 11.575 0.883321 11.4834 0.699987 11.3Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableHotel;
