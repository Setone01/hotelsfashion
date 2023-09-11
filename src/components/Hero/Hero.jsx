import React from "react";
// import bgImage from "../Assets/images/bgImage.svg";
import { HiOutlineSearch } from "react-icons/hi";
// import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
// import { list } from "../Assets/dummyDB";

const Hero = () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen h-[90vh] relative">
      <div className="relative w-full h-full flex justify-center items-center bg-heroBg bg-no-repeat bg-cover bg-center">
        <div className="w-full h-full flex items-center justify-center flex-col  bg-black/5">
          <div className=" flex justify-center items-center text-center flex-col mb-6">
            <h1 className="text-[50px] text-gray-200 font-semibold leading-[4rem] mb-3">
              FIND A HOME FOR YOUR DESIGNS
            </h1>
            <span className=" text-[15px] text-white font-light capitalize">
              pop ups in top class hotels around the world
            </span>
          </div>

          <form className=" grid xs:grid-cols-1 md:grid-cols-3 items-center gap-1">
            <div className="w-full relative flex items-center text-gray-400 focus-within:text-gray-600 ">
              <HiOutlineSearch className="absolute w-8 h-8 ml-3 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Find a space"
                className="w-full pr-3 pl-14 py-5 text-sm text-black font-light capitalize tracking-wider border-none placeholder:text-sm placeholder:font-medium placeholder:normal-case outline-none"
              />
            </div>
            {/* <div className="w-1 h-11 bg-slate-500"></div> */}
            <div className="w-full relative">
              <select className=" appearance-none w-full py-5 px-5 text-sm font-medium text-gray-400 bg-white outline-none">
                <option value="">Duration&hellip;</option>
                <option value="1">24 hours</option>
                <option value="2">Two days</option>
                <option value="3">A week</option>
              </select>
              <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-3 text-gray-500 border-l">
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className=" flex max-w-max justify-center items-center">
              <button className=" bg-deepWine py-5 px-10 flex justify-center items-center text-base font-medium uppercase border-none rounded-sm focus:ring-2 focus:ring-white text-white">
                Search
                {/* <HiOutlineSearch className="w-16 h-16"/> */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
