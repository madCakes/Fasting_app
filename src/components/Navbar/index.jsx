import { React } from "react";
import star from "../../assets/star.svg";
import fire from "../../assets/fire.svg";
import clock from "../../assets/clock.svg";

const Navbar = () => {
  return (
    <navbar className="flex  justify-between">
      {/* Left total days fasted*/}

      <div className="flex">
        <img className="w-10" src={star} />
        <p>star counter</p>
      </div>
      {/* Middle */}
      <div className="flex">
        <img className="w-10" src={fire} />
        <p>daily streak</p>
      </div>
      {/* Right */}
      <div className="flex">
        <img className="w-10" src={clock} />
        <p>hours fasted</p>
      </div>
    </navbar>
  );
};

export default Navbar;
