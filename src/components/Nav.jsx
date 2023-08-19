import React from "react";
import { navLink } from "./Assets/dummyDB";
import { Link } from "react-router-dom";
import logo from "../components/Assets/images/logo.svg";
import britain from "../components/Assets/images/britain.svg";
import { LiaUserCircleSolid } from "react-icons/lia";

const Nav = () => {
  return (
    <div className="w-screen h-[4rem] bg-deepGrey flex justify-center items-center shadow-md fixed z-50">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className="">
          <img className="w-24" src={logo} alt="logo" />
        </div>
        <ul
          className="flex justify-center items-center text-textBlack text-sm font-normal gap-7"
        >
          {navLink.map((data, index) => (
            <li key={index} className="">
              <Link to={data.path}>{data.title}</Link>
            </li>
          ))}
        </ul>
        <div className=" flex justify-center items-center gap-8">
          <div className="rounded-full cursor-pointer">
            <img className="w-6 object-cover" src={britain} alt="" />
          </div>
          <div className="">
            <LiaUserCircleSolid size={29} className=" cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
