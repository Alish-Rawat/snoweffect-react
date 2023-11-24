import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const SimpleSlider = () => {
  var settings = {
    className: "h-[35rem] w-[40rem] bg-blue-500 m-4 shadow-xl rounded-lg",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // margin: 10,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className=" h-[35em] w-[45rem]  rounded-full">
      <div className="h-screen flex justify-center ">
        <Slider {...settings}>
          <div className="">
            <img
              //   className="flex items-center justify-center h-screen"
              className="w-full rounded-xl"
              alt="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlkaoUtALkRBE72OiXBx4HaLWddR76kBSdw&usqp=CAU"
            />
            <p className="m-4 border border-s-blue-gray-200 p-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages
            </p>
          </div>
          <div>
            <img
              className="w-full rounded-xl "
              alt="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlkaoUtALkRBE72OiXBx4HaLWddR76kBSdw&usqp=CAU"
            />
            <p className="m-4 border border-s-blue-gray-200 p-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
          </div>
          <div>
            <img
              className="w-full rounded-xl "
              alt="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlkaoUtALkRBE72OiXBx4HaLWddR76kBSdw&usqp=CAU"
            />
            <p className="m-4 border border-s-blue-gray-200 p-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};
