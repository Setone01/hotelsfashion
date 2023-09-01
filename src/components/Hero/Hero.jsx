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
        {/* <div className=" w-full">
          <img
            className="w-full h-full object-cover"
            src={bgImage}
            alt="background"
          />
        </div> */}
        <div className="w-full h-full flex items-center justify-center flex-col  bg-black/5">
          <div className=" flex justify-center items-center text-center flex-col mb-6">
            <h1 className=" xs:text-[40px] md:text-[56px] text-gray-200 font-semibold tracking-wider mb-3">FIND A HOME FOR YOUR DESIGNS</h1>
            <span className=" text-[18px] text-white font-medium capitalize">pop ups in top class hotels around the world</span>
          </div>
          <div className=" z-20">
            <form className="w-full flex items-center justify-center">
              <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 ">
                <HiOutlineSearch className="absolute ml-3 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Find a space"
                  className=" min-w-[100px] pr-3 pl-10 py-2 text-sm text-black font-light capitalize tracking-wider border-none placeholder:text-sm placeholder:font-normal placeholder:normal-case outline-none"
                />
              </div>
              <div className="">
                <div className=""></div>
              </div>
              {/* <div className="relative flex items-center flex-col w-36">
                <button
                type="button"
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="bg-white w-full flex items-center justify-between py-2 px-3 text-sm border-l tracking-wider text-gray-400 "
                >
                  Duration
                  {!isOpen ? (
                    <MdKeyboardArrowDown size={18} />
                  ) : (
                    <MdKeyboardArrowUp size={18} />
                  )}
                </button>
                {isOpen && (
                  <div className="absolute bg-white top-10 w-full flex items-start pl-3">
                    <div className="pt-2">
                      {list.map((item, i) => (
                        <div
                          className=" flex items-start flex-col text-gray-400"
                          key={i}
                        >
                          <h4 className="text-xs mb-2 capitalize">
                            {item.title}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div> */}
              <div className=" flex justify-center items-center ml-3">
                <button className=" bg-deepWine w-14 flex justify-center items-center py-2 font-bold border-none rounded-sm focus:ring-2 focus:ring-white text-white">
                  <HiOutlineSearch size={19} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
