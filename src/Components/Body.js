import React from "react";
import TwoComponents from "./TwoComponents";

import { SimpleSlider } from "./Carousel";

const Body = () => {
  return (
    <div className="">
      <TwoComponents />
      <div className="h-screen flex justify-center bg-hero">
        {/* <Carousel /> */}
        <SimpleSlider />
      </div>
      <div className="snow"></div>
    </div>
  );
};

export default Body;
