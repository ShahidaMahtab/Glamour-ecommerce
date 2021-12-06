import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import about from "../../../Images/about.jpg";
const About = ({ nav }) => {
  return (
    <div className="bg-gray-200 mx-auto">
      {!nav || <Navigation></Navigation>}
      <h3
        className={
          nav
            ? "text-3xl text-white font-bold mt-24"
            : "text-3xl text-white font-bold"
        }
      >
        Welcome To Beauty World
      </h3>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 py-12 p-11 lg:pl-16">
        <div className="mx-auto text-white text-center break-normal  pb-10  lg:pb-0 whitespace-pre-wrap ">
          Makeup faucibus mi id convallis pulvinar velit est vulputate elit sed
          suscin the maurisen anteeget mi. Mauris tincidunt nulla. Donec velit
          urna congue et magna uthe consele tecmetur accumsan turpis. Etiam ac
          torto the luctus. Etiam ac tortor porttitor lucte odio ac aliquam
          augue.
          <br />
          <br />
          Praesent dienis elementum erateu interdun elit ullamcorper sit amet.
          Curabitur man ipse rhoncus felis nothe viverra dana elemtum velit. The
          etiam ac tortor porttitor luctus odio ac aliquam augue. Praesent the
          dienis elemen erateun interdun elit. Curabitur man ipse rhoncus felis
          nonte viverra.
        </div>
        <div className="mx-auto border border-3 border-white">
          <img src={about} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default About;
