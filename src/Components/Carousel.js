import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const SimpleSlider = () => {
  var settings = {
    className: "h-[30rem] w-[35rem] bg-blue-500 m-4 shadow-xl rounded-lg",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // margin: 10,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className=" h-[30em] w-[40rem]  rounded-full">
      <div className=" flex justify-center translate-y-10">
        <Slider {...settings}>
          <div className="">
            <img
              //   className="flex items-center justify-center h-screen"
              className="w-full rounded-xl h-[20rem]"
              alt="img"
              src="https://lh3.googleusercontent.com/esRB5pmP2_iuVI3jSTvSqrZAe8o2iOdST3lXmx3h8RlRtcUiPiRoTSMfF1bhmoJrV3T6XmjuK_f4CxdaFezEwbIr=w640-h400-e365-rj-sc0x00ffffff"
            />
            <p className="m-4 border border-s-blue-gray-200 p-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. ever since the
              1500s, when an unknown printer took a
            </p>
          </div>
          <div>
            <img
              className="w-full rounded-xl h-[20rem]"
              alt="img"
              src="https://wallpapers.com/images/hd/neon-demon-slayer-tengen-uzui-cw5wj06w8h06hkao.jpg"
            />
            <p className="m-4 border border-s-blue-gray-200 p-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, point of using Lorem Ipsum is that it has
              a more-or-less normal distribution of letters,
            </p>
          </div>
          <div>
            <img
              className="w-full rounded-xl "
              alt="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXTEhztpl3yNzAue5nzECPSsUnSKO9yGnJMA&usqp=CAU"
            />
            <p className="m-4 border border-s-blue-gray-200 p-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. injected humour, randomised which don't look
              even slightly believable.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};
