import React from "react";
import "./Hero.css"; 
import { HiLocationMarker } from "react-icons/hi";
const Hero = () => {
  return (
    <search className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container flexCenter">
        <div className="flexColStart hero-left">
          <div className=" hero-title">
            <div className="orange-cicle"></div>
            <h1>
              {" "}
              Discocerr <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span>Find a variety of prperties that suit you very easilty</span>
            <span>Find a variety of prperties that suit you very easilty</span>
          </div>
        </div>
        <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </search>
  );
};

export default Hero;
