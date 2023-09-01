import { React, useState } from "react";

import { WeightForm } from "../";

const Main = () => {
  const [water, setWater] = useState(0);
  const [weight, setWeight] = useState(0);
  const [steps, setSteps] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const timeRemaining = "00:00:00"
  return (
    <section className="flex flex-col mt-2 mx-5">
      <div className="flex p-2 border-solid border-2 border-slate-900 rounded">
        <div className="my-auto mx-10">Fasting chart</div>
        <div className="m-1">
          <p className="text-xl">{timeRemaining}</p>
          <h1>fasting time remaining </h1>
          <button className="p-5 bg-slate-900 rounded text-white">
            End fasting
          </button>
        </div>
      </div>
      <div className="mt-2 p-2 border-solid border-2 border-slate-900 rounded">
        <p></p>
        <img src="" alt="water" />
        <button>
          <img src="" alt="+" />
        </button>
      </div>
      <div className="mt-2 p-2 border-solid border-2 border-slate-900 rounded">
        <p></p>
        <img src="" alt="steps" />
        <button>
          <img src="" alt="+" />
        </button>
      </div>
      <div className="mt-2 p-2 border-solid border-2 border-slate-900 rounded">
        <p></p>
        <img src="" alt="weight" />
        <button onClick={toggleForm}>
          <img src="" alt="+" />
        </button>
        {isOpen && <WeightForm />}
      </div>
    </section>
  );
};

export default Main;
