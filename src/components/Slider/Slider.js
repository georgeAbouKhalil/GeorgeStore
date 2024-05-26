/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Slider from "react-slick";
import ItemSlider from "../ItemSlider/ItemSlider";

function SliderCom({ cat }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="w-4/5 mx-auto my-6 p-4">
      <Slider {...settings}>
        {cat.map((category) => (
          <ItemSlider item={category} key={category.id} />
        ))}
      </Slider>
    </div>
  );
}

export default SliderCom;
