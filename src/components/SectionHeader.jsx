import React from "react";

const SectionHeader = ({ title, para }) => {
  return (
    <div className="w-full text-textGrey font-medium flex justify-center flex-col mb-7 flex-nowrap">
      <h1 className="text-3xl leading-9">{title}</h1>
      <span className="text-sm mt-3">{para}</span>
    </div>
  );
};

export default SectionHeader;
