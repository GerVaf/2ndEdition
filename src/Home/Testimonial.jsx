import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Testimonial.css";
import { TesData } from "../assets/Testimonial";

const Testimonial = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="p-5 ">
        <h2 className="sm:text-4xl text-2xl sm:mb-2 main-text-color font-bold">-Knowlage</h2>
        <p className="sm:text-2xl text-lg sm:ml-10 ml-5">Background Knowlage</p>
      </div>

      <div className="App mb-20">
        <Slider {...settings}>
          {TesData.map((item) => (
            <div key={item.id} className="card text-black">
              <div className="card-top">
                <div className=" my-3 m-auto w-56">
                  <img src={item.img} />
                </div>
                <h1 className=" font-bold main-text-color">{item.title}</h1>
              </div>
              <div className="card-bottom">
                <h3>{item.text}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
