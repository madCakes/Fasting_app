import React from "react";
import { NavLink } from "react-router-dom";

import star from "../../assets/star.svg";

const Footer = () => {
  return (
    <navbar className="flex justify-around p-1 pt-2 mx-4 pb-2 absolute inset-x-0 bottom-0">
      <NavLink to="/" className="flex flex-col w-full py-2">
        <img className="w-7 mx-auto my-1" src={star} alt="Today" />
        <p className="m-auto">Today</p>
      </NavLink>
      <NavLink to="/fast" className="flex flex-col w-full py-2">
        <img className="w-7 mx-auto my-1" src={star} alt="Fast" />
        <p className="m-auto">Fast</p>
      </NavLink>
      <NavLink to="/profile" className="flex flex-col w-full py-2">
        <img className="w-7 mx-auto my-1" src={star} alt="Profile" />
        <p className="m-auto">Profile</p>
      </NavLink>
    </navbar>
  );
};

export default Footer;
