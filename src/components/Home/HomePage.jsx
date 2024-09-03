import React, { useState } from "react";
import Home from "../../assets/Home.svg";

const HomePage = () => {
  return (
    <div className="md:flex md:mx-16 md:justify-around block justify-center items-center">
      <div className="md:w-[545px] w-96 md:my-5 my-3 md:px-7 px-5">
        <h1 className="md:px-7 px-5 md:pb-4 pb-4 md:pt-20 pt-11 top-0 left-0 md:text-7xl text-5xl text-discogreenver-text">
          Discover And Find Your Own Product
        </h1>
        <h4 className="md:px-7 px-5 md:text-2xl text-xl text-small-text-green">
          Your ideal product is just a click away. Explore our site to find
          what's right for you!
        </h4>
        <button className="md:mx-7 mx-4 md:mt-10 mt-5 md:py-3 py-2 md:px-12 px-9  md:text-2xl text-xl text-white bg-discogreenver-text">
          EXPLORE NOW
        </button>
      </div>

      <div>
        <img
          className="md:box-content md:size-[467px] md:px-6 md:py-24 right-0 size-[354px] px-4 py-14"
          src={Home}
        />
      </div>
    </div>
  );
};

export default HomePage;
