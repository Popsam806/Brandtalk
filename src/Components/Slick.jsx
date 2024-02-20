import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles.css";

function Slick() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "3.75rem",
    slidesToShow: 1,
    speed: 500,
    // nextArrow: (
    //   <div>
    //     <div className="next-slick-arrow"> ⫸ </div>
    //   </div>
    // ),
    // prevArrow: (
    //   <div>
    //     <div className="prev-slick-arrow"> ⫷ </div>
    //   </div>
    // ),
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <h3>1</h3>
        </div>
        <div className="slide">
          <h3>2</h3>
        </div>
        <div className="slide">
          <h3>3</h3>
        </div>
        <div className="slide">
          <h3>4</h3>
        </div>
        <div className="slide">
          <h3>5</h3>
        </div>
        <div className="slide">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Slick;
