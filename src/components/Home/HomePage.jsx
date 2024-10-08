import React, { useState } from "react";
import Home from "../../assets/Home.svg";

const HomePage = () => {
  return (
    <div className="md:flex md:flex-row md:mx-16 md:justify-around flex flex-col-reverse justify-center items-center">
      <div className="sm:w-[565px] w-96 my-3 md:px-7 px-5">
        <h1 className="md:px-7 px-5 md:pb-4 pb-4 md:pt-20 pt-11 top-0 left-0 lg:text-7xl text-5xl text-discogreenver-text">
          Discover And Find Your Own Product
        </h1>
        <h4 className="md:px-7 px-5 lg:text-2xl text-xl text-small-text-green">
          Your ideal product is just a click away. Explore our site to find
          what's right for you!
        </h4>
        <button className="md:mx-7 mx-4 md:mt-8 mt-5 md:py-3 py-2 md:px-12 px-9  lg:text-2xl text-xl text-white bg-discogreenver-text">
          EXPLORE NOW
        </button>
      </div>

      <div>
        <img
          className="md:box-content md:size-[467px] md:px-6 md:py-20 right-0 size-[424px] mt-8 px-4  "
          src={Home}
        />
      </div>
    </div>
  );
};

export default HomePage;
