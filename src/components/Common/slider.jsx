import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div><img src="https://via.placeholder.com/300" alt="Slide 1" /></div>
      <div><img src="https://via.placeholder.com/300" alt="Slide 2" /></div>
      <div><img src="https://via.placeholder.com/300" alt="Slide 3" /></div>
      <div><img src="https://via.placeholder.com/300" alt="Slide 4" /></div>
    </Slider>
  );
};

export default SliderComponent;