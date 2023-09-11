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
            <div className="flex items-center gap-6 mt-4">
              <span>
                <svg
                  width="15"
                  height="25"
                  viewBox="0 0 15 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6667 1.66674C14.6667 1.48993 14.5964 1.32036 14.4714 1.19533C14.3464 1.07031 14.1768 1.00007 14 1.00007H10.6667C8.98816 0.916459 7.3448 1.50059 6.09563 2.62484C4.84646 3.7491 4.09305 5.32207 4 7.00007V10.6001H0.666667C0.489856 10.6001 0.320287 10.6703 0.195262 10.7953C0.070238 10.9204 0 11.0899 0 11.2667V14.7334C0 14.9102 0.070238 15.0798 0.195262 15.2048C0.320287 15.3298 0.489856 15.4001 0.666667 15.4001H4V24.3334C4 24.5102 4.07024 24.6798 4.19526 24.8048C4.32029 24.9298 4.48986 25.0001 4.66667 25.0001H8.66667C8.84348 25.0001 9.01305 24.9298 9.13807 24.8048C9.2631 24.6798 9.33333 24.5102 9.33333 24.3334V15.4001H12.8267C12.9749 15.4022 13.1197 15.3548 13.238 15.2655C13.3563 15.1762 13.4415 15.0499 13.48 14.9067L14.44 11.4401C14.4665 11.3416 14.4701 11.2383 14.4504 11.1382C14.4308 11.0381 14.3884 10.9438 14.3266 10.8627C14.2647 10.7816 14.1851 10.7157 14.0938 10.6701C14.0025 10.6246 13.902 10.6006 13.8 10.6001H9.33333V7.00007C9.3665 6.67004 9.52149 6.36422 9.76803 6.14233C10.0146 5.92044 10.335 5.79841 10.6667 5.80007H14C14.1768 5.80007 14.3464 5.72983 14.4714 5.60481C14.5964 5.47978 14.6667 5.31021 14.6667 5.1334V1.66674Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.88 5.78002C4.48 5.78002 5.76 4.48002 5.76 2.90002C5.76 1.32002 4.46 0.0200195 2.88 0.0200195C1.3 0.0200195 0 1.32002 0 2.90002C0 4.48002 1.3 5.78002 2.88 5.78002ZM8.5 7.96002V24H13.46V16.08C13.46 13.98 13.86 11.96 16.44 11.96C19.02 11.96 19.02 14.36 19.02 16.2V24H24V15.2C24 10.88 23.08 7.56002 18.04 7.56002C15.62 7.56002 14 8.88002 13.34 10.14H13.28V7.94002H8.52L8.5 7.96002ZM0.4 7.96002H5.38V24H0.4V7.96002Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.40001 0.666748H19.6C23.8667 0.666748 27.3333 4.13341 27.3333 8.40008V19.6001C27.3333 21.6511 26.5186 23.6181 25.0683 25.0684C23.618 26.5187 21.651 27.3334 19.6 27.3334H8.40001C4.13334 27.3334 0.666672 23.8668 0.666672 19.6001V8.40008C0.666672 6.34907 1.48143 4.38207 2.93171 2.93179C4.38199 1.48151 6.349 0.666748 8.40001 0.666748ZM8.13334 3.33341C6.8603 3.33341 5.6394 3.83913 4.73923 4.7393C3.83905 5.63948 3.33334 6.86038 3.33334 8.13341V19.8667C3.33334 22.5201 5.48001 24.6667 8.13334 24.6667H19.8667C21.1397 24.6667 22.3606 24.161 23.2608 23.2609C24.161 22.3607 24.6667 21.1398 24.6667 19.8667V8.13341C24.6667 5.48008 22.52 3.33341 19.8667 3.33341H8.13334ZM21 5.33342C21.442 5.33342 21.866 5.50901 22.1785 5.82157C22.4911 6.13413 22.6667 6.55805 22.6667 7.00008C22.6667 7.44211 22.4911 7.86603 22.1785 8.17859C21.866 8.49115 21.442 8.66675 21 8.66675C20.558 8.66675 20.1341 8.49115 19.8215 8.17859C19.5089 7.86603 19.3333 7.44211 19.3333 7.00008C19.3333 6.55805 19.5089 6.13413 19.8215 5.82157C20.1341 5.50901 20.558 5.33342 21 5.33342ZM14 7.33342C15.7681 7.33342 17.4638 8.03579 18.7141 9.28604C19.9643 10.5363 20.6667 12.232 20.6667 14.0001C20.6667 15.7682 19.9643 17.4639 18.7141 18.7141C17.4638 19.9644 15.7681 20.6667 14 20.6667C12.2319 20.6667 10.5362 19.9644 9.28596 18.7141C8.03572 17.4639 7.33334 15.7682 7.33334 14.0001C7.33334 12.232 8.03572 10.5363 9.28596 9.28604C10.5362 8.03579 12.2319 7.33342 14 7.33342ZM14 10.0001C12.9391 10.0001 11.9217 10.4215 11.1716 11.1717C10.4214 11.9218 10 12.9392 10 14.0001C10 15.0609 10.4214 16.0784 11.1716 16.8285C11.9217 17.5787 12.9391 18.0001 14 18.0001C15.0609 18.0001 16.0783 17.5787 16.8284 16.8285C17.5786 16.0784 18 15.0609 18 14.0001C18 12.9392 17.5786 11.9218 16.8284 11.1717C16.0783 10.4215 15.0609 10.0001 14 10.0001Z"
                    fill="#202020"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="28"
                  height="23"
                  viewBox="0 0 28 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9467 2.99992C26.92 3.46659 25.8133 3.77325 24.6667 3.91992C25.84 3.21325 26.7467 2.09325 27.1733 0.746585C26.0667 1.41325 24.84 1.87992 23.5467 2.14659C22.4933 0.999919 21.0133 0.333252 19.3333 0.333252C16.2 0.333252 13.64 2.89325 13.64 6.05325C13.64 6.50659 13.6933 6.94659 13.7867 7.35992C9.04001 7.11992 4.81334 4.83992 2.00001 1.38659C1.50668 2.22659 1.22668 3.21325 1.22668 4.25325C1.22668 6.23992 2.22668 7.99992 3.77334 8.99992C2.82668 8.99992 1.94668 8.73325 1.17334 8.33325V8.37325C1.17334 11.1466 3.14668 13.4666 5.76001 13.9866C4.92098 14.2162 4.04014 14.2481 3.18668 14.0799C3.54882 15.2166 4.25806 16.2111 5.2147 16.9238C6.17134 17.6365 7.32727 18.0315 8.52001 18.0533C6.49818 19.6538 3.99201 20.519 1.41334 20.5066C0.960011 20.5066 0.506678 20.4799 0.0533447 20.4266C2.58668 22.0533 5.60001 22.9999 8.82668 22.9999C19.3333 22.9999 25.1067 14.2799 25.1067 6.71992C25.1067 6.46659 25.1067 6.22658 25.0933 5.97325C26.2133 5.17325 27.1733 4.15992 27.9467 2.99992Z"
                    fill="#202020"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-12 bg-black text-white flex items-center">
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
          <h4 className=" text-lg text-deepWine font-bold mb-2 text-dark">
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
          className={`inline-block text-sm text-textBlack leading-loose  hover:text-textGrey`}
        >
          {label}
        </a>
      </li>
    </div>
  );
};
