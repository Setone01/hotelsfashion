import React from "react";

const SecctionHeader = ({ title, desc }) => {
  return (
    <div className="w-full text-textGrey font-medium flex justify-center flex-col mb-7 flex-nowrap">
      <h1 className="text-3xl">{title}</h1>
      <span className="text-sm mt-2">{desc}</span>
    </div>
  );
};

export default SecctionHeader;
