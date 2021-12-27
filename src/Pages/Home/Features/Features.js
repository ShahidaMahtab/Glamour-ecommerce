import React from "react";
import img1 from "../../../Images/img1.jpg";
import img3 from "../../../Images/img-3.jpg";
import img2 from "../../../Images/img-2.jpg";

const Features = () => {
  return (
    <div className="py-16 bg-gray-200">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1  gap-2  ">
        <div className=" mx-auto">
          <div className="relative">
            <h1 className="text-2xl text-white absolute pl-5 pt-5">
              Lipstick collection
            </h1>
            <img src={img1} alt="" />
          </div>
        </div>
        <div className=" mx-auto">
          <h1 className="text-2xl text-white absolute pl-5 pt-5">
            Brush collection
          </h1>
          <img src={img2} alt="" />
        </div>
        <div className=" mx-auto">
          <h1 className="text-2xl text-white absolute pl-5 pt-5">
            Mascara collection
          </h1>
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
