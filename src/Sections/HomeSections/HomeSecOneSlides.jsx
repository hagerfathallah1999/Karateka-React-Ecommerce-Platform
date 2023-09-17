import React from "react";
import Slider from "../HomeSections/Slider";

const HomeSecOneSlides = () => {
  const slides = [
    {
      image:
        "../src/assets/Imgs/HomePageImages/SecOneSlider/FinalCover-removebg-preview.png",
    },
    {
      image: "../src/assets/Imgs/HomePageImages/SecOneSlider/top-img2.jpg",
    },
    {
      image:
        "../src/assets/Imgs/HomePageImages/SecOneSlider/SliderImg03Belt.png",
    },
    // {
    //   image:
    //     "../src/assets/Imgs/HomePageImages/SecOneSlider/SliderImg01Arawaza.jpg",
    // },
  ];

  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
};

export default HomeSecOneSlides;
