import React, { useState } from "react";
import { navLink } from "./Assets/dummyDB";
import { Link } from "react-router-dom";
import logo from "../components/Assets/images/logo.svg";
import britain from "../components/Assets/images/britain.svg";
import { LiaUserCircleSolid } from "react-icons/lia";
import { IoIosMenu } from "react-icons/io";
import { GrClose } from "react-icons/gr";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Handling mobile nav dropdown
  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  const removeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-screen h-[5.1rem] bg-deepGrey flex justify-center items-center shadow-md fixed z-50">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {isOpen ? <GrClose size={30} /> : <IoIosMenu size={30} />}
        </div>
        <div className="">
          <img className="w-24 z-40" src={logo} alt="logo" />
        </div>
        <ul className="hidden md:flex justify-center items-center text-textBlack font-light gap-7">
          {navLink.map((data, index) => (
            <li key={index} className="text-base font-normal">
              <Link to={data.path}>{data.title}</Link>
            </li>
          ))}
        </ul>
        <div className=" flex justify-center items-center gap-8">
          <div className="hidden md:block rounded-full cursor-pointer">
            <img className="w-6 object-cover" src={britain} alt="" />
          </div>
          <div className="">
            <LiaUserCircleSolid size={29} className=" cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Mobile Nav dropdown */}
      <div
        className={
          isOpen
            ? "block md:hidden absolute w-screen h-[40dvh] top-20 [&>li>Link:transition-all] [&>li>Link:ease-in-out] [&>li>Link:delay-500] bg-[#d8d8d6]"
            : "absolute -left-[100%]"
        }
      >
        <ul className=" flex justify-center items-start flex-col mt-4 mb-5 mx-7 transition-all ease-out delay-500 ">
          <li className="w-full flex justify-start items-center pl-2 py-2 border-b border-gray-400 hover:pl-4 hover:bg-slate-400/20">
            <Link
              onClick={removeNav}
              className=" text-sm font-semibold uppercase "
              href=""
            >
              Hotel
            </Link>
          </li>
          <li className="w-full flex justify-start items-center pl-2 py-2 border-b border-gray-400 hover:pl-4 hover:bg-slate-400/20">
            <Link
              onClick={removeNav}
              className=" text-sm font-semibold uppercase"
              href=""
            >
              Brand
            </Link>
          </li>
          <li className="w-full flex justify-start items-center pl-2 py-2 border-b border-gray-400 hover:pl-4 hover:bg-slate-400/20">
            <Link
              onClick={removeNav}
              className=" text-sm font-semibold uppercase"
              href=""
            >
              About us
            </Link>
          </li>
          <li className="w-full flex justify-start items-center pl-2 py-2 border-b border-gray-400 hover:pl-4 hover:bg-slate-400/20">
            <Link
              onClick={removeNav}
              className="text-sm font-semibold uppercase"
              href=""
            >
              How it Works
            </Link>
          </li>
          <li className="w-full flex justify-start items-center pl-2 py-2 border-b border-gray-400 hover:pl-4 hover:bg-slate-400/20 outline-none">
            <Link
              onClick={removeNav}
              className=" text-sm font-semibold uppercase"
              href=""
            >
              Pricing
            </Link>
          </li>
          <li className="w-full flex justify-start items-center pl-2 py-2 border-b border-gray-400 hover:pl-4 hover:bg-slate-400/20">
            <Link
              onClick={removeNav}
              className=" text-sm font-semibold uppercase"
              href=""
            >
              Contact
            </Link>
          </li>
          <hr />
        </ul>
        <div className=" flex items-center gap-3 ml-8">
          <img className="w-7 h-7 rounded-full cursor-pointer object-cover" src={britain} alt="" />
          <p onClick={removeNav} className=" text-base font-light uppercase">English</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
