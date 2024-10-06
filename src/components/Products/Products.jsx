import React, { useState } from "react";
import stationery from "../../assets/product/stationery.svg";
import electronic from "../../assets/product/electronic.svg";
import sport from "../../assets/product/sport.svg";
import bagshoes from "../../assets/product/bagshoes.svg";

const Products = () => {
  const Picture = [{ name: "Stationery", imag: stationery, link: "/" },
    {name:"Bag and Shoes",imag:bagshoes, link:"/"},
    {name:"Sports equipment", imag:sport, link:"/"},
    {name:"Electronics", imag:electronic, link:"/"},
  ];
  return (
    <div className="flex-col items-center justify-between">
      <div>
        <h3>Products</h3>
        <h6>
          Find the perfect product to suit your needs and start exploring our
          collection today!
        </h6>
      </div>
      <div className="grid grid-cols-2 gap-6 p-">
        {Picture.map((item, index) => (
          <div key={index} className="justify-between items-center">
            <a href={item.link} className="">
              <img src={item.imag} alt={item.name} className="" />
            </a>
            <h5 className="justify-center">{item.name}</h5>
          </div>
        ))}
      </div>
      <button></button>
    </div>
  );
};
export default Products;
