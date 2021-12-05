import React from "react";
import banner from "../../../Images/banner.jpg";

const imgBanner = {
  background: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${banner}) center/cover no-repeat`,
  height: "700px",
};
const Banner = () => {
  return (
    <div className="bg-gray-200 ">
      <div
        className="bg-local flex justify-center items-center "
        style={imgBanner}
      >
        <div className="text-white  ">
          <small className="text-sm">Take Your Makeup</small>
          <h2 className="text-5xl text-purple-800 font-bold">Year End Sale</h2>
          <h3 className="tracking-widest	">
            upto <span className="text-4xl text-purple-800 font-bold">30</span>{" "}
            % off
          </h3>
          <button className="bg-purple-800 p-3 m-6  capitalize text-lg">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;