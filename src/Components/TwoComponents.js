import React from "react";

const TwoComponents = () => {
  return (
    <div className="flex">
      <div className="m-14 absolute left-0 opacity-30 shadow-2xl bg-purple-900 w-[14rem] h-[30rem] border border-blue-gray-300 "></div>
      <div className="m-14 opacity-30 absolute shadow-2xl right-0 bg-blue-600 w-[14rem] h-[30rem] border border-blue-gray-300"></div>
    </div>
  );
};

export default TwoComponents;
