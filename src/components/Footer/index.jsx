import React from "react";
import star from "../../assets/star.svg";

const Footer = () => {
  return (
    <navbar className="flex justify-around p-1 pt-2 mx-4 pb-2 absolute inset-x-0 bottom-0">
      <div className="flex flex-col">
        <img className="w-7 mx-auto my-1" src={star} alt="Today" />
        <p>Today</p>
      </div>
      <div className="flex flex-col">
        <img className="w-7 mx-auto my-1" src={star} alt="Fast" />
        <p>Fast</p>
      </div>
      <div className="flex flex-col">
        <img className="w-7 mx-auto my-1" src={star} alt="Profile" />
        <p>Profile</p>
      </div>
    </navbar>
  );
};

export default Footer;
