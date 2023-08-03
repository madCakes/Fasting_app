import { React } from "react";
import star from "../../assets/star.svg";
import fire from "../../assets/fire.svg";
import clock from "../../assets/clock.svg";

const Navbar = () => {
  return (
    <navbar className="flex justify-between p-1 mt-4 mx-4">
      {/* Left: total days fasted*/}

      <div className="flex">
        <img className="w-7" src={star} />
        <p className="m-1">10</p>
      </div>
      {/* Middle: consecutive days fasted */}
      <div className="flex">
        <img className="w-6" src={fire} />
        <p className="m-1">10</p>
      </div>
      {/* Right: lifetime total fasted hours */}
      <div className="flex">
        <img className="w-7 mt-1" src={clock} />
        <p className="m-1">10</p>
      </div>
    </navbar>
  );
};

export default Navbar;
