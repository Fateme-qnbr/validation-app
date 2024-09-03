import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import Basket from "../../assets/Basket.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "HOME", link: "/" },
    { name: "SHOP", link: "/" },
    { name: "FEATURES", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  return (
    <div className="raleway-uniquifier shadow-md w-full fixed top-0 left-0 bg-custom-orange">
      <nav className="md:flex items-center justify-between container mx-auto px-1 py-3">
        {/* Logo Section */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <img
            className="w-36 h-[25px] lg:h-4/5 cursor-pointer"
            src={Logo}
            alt="Logo"
          />

          {/* Menu Icon */}
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>

        {/* Link Items */}
        <ul
          className={`md:flex md:items-center justify-center items-center md:pb-0 absolute md:static md:bg-custom-orange bg-green-800 md:z-auto z-[-1] w-full md:w-auto transition-all duration-500 ease-in ${
            open
              ? "top-16 text-white right-0 opacity-100"
              : "text-black top-16 right-[-400px] opacity-0 md:opacity-100"
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="text-center md:ml-8 text-xl md:text-base lg:text-xl my-7 md:my-0"
            >
              <a
                href={link.link}
                className="hover:text-product-green duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="text-center md:ml-8 my-7 md:my-0">
            <a href="#">
              <img
                className="fill-current mx-auto w-auto h-auto"
                src={Basket}
                alt="Basket-cart"
              />
            </a>
          </li>
          <li className="text-center md:ml-8 my-7 md:my-0">
            <button className="border-green px-3 py-1 rounded duration-500">
              LOGIN
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
