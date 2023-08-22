import React, { useState } from "react";

const Footer = () => {
  const [data, setData] = useState({ email: "" });

  //handling change function
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submited successfully");
  };
  return (
    <footer className="w-screen mt-auto bg-[#FFFDFE]">
      <div className="w-[90%] mx-auto grid lg:grid-cols-2 py-10">
        <div className="w-full grid xs:grid-col-1 lg:grid-cols-3 justify-between">
          <LinkGroup header={"Helpful Tip"}>
            <NavLink link={"/"} label={"How it Works"} />
            <NavLink link={"/"} label={"Rent Space"} />
            <NavLink link={"/"} label={"Hotels Dashboard"} />
            <NavLink link={"/"} label={"Trending Hotels"} />
            <NavLink link={"/"} label={"Verified Brands"} />
          </LinkGroup>
          <LinkGroup header={"Quicklinks"}>
            <NavLink link={"/"} label={"About Us"} />
            <NavLink link={"/"} label={"FAQs"} />
            <NavLink link={"/"} label={"Terms of Service"} />
            <NavLink link={"/"} label={"Privacy Policy"} />
            <NavLink link={"/"} label={"Cookie Policy"} />
          </LinkGroup>
          <LinkGroup header={"Discover"}>
            <NavLink link={"/"} label={"City Guide"} />
            <NavLink link={"/"} label={"Blog"} />
            <NavLink link={"/"} label={"Reviews"} />
            <NavLink link={"/"} label={"Events"} />
          </LinkGroup>
        </div>

        <div className="w-full flex justify-start flex-col group">
          <p className="text-sm text-textBlack mb-3">
            Get updates about available spaces, weekly digest of our most
            important activities and more in your email.
          </p>
          <div className="w-full justify-center flex-col">
            <form
              className="flex justify-center space-x-2"
              method="post"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter Your Email Address"
                className=" w-full border-[1.5px] border-black px-3 py-2 text-sm text-textGrey font-normal placeholder:text-sm placeholder:text-deepGrey placeholder:font-normal outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2 border-[1.5px] border-deepWine rounded-none bg-deepWine text-white text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-4">
              <a
                href="mailto:theteam@hotelsfashion.com"
                className="text-sm text-textBlack underline"
              >
                mailto:theteam@hotelsfashion.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-10 bg-black text-white flex items-center">
        <p className="w-[90%] mx-auto text-sm font-light">
          {" "}
          Hotel Fashion &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full">
        <div className=" mb-10">
          <h4 className=" text-lg text-deepWine font-semibold mb-2 text-dark">
            {" "}
            {header}{" "}
          </h4>
          <ul>{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <div>
      <li>
        <a
          href={link}
          className={`inline-block text-sm text-textBlack leading-loose text-body-color hover:text-textGrey`}
        >
          {label}
        </a>
      </li>
    </div>
  );
};
