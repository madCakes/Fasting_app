import { React, useState } from "react";

const Main = () => {
  const [water, setWater] = useState(0);
  const [weight, setWeight] = useState(0);
  const [steps, setSteps] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col mt-2 mx-5">
      <div className="flex p-2 border-solid border-2 border-slate-900 rounded">
        <div className="m-1">Fasting chart</div>
        <div className="m-1">
          <p></p>
          <h1>fasting time remaining </h1>
          <button className="p-1 bg-slate-900 rounded text-white">
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
        <button>
          <img src="" alt="+" />
        </button>
        <form onSubmit={handleSubmit} className="flex flex-row">
          <input
            className="mx-2 px-1 rounded"
            id="weight"
            type="number"
            max="500"
          />
          <p>.</p>
          <input className="mx-2 px-1 rounded" type="number" max="9" />
          <label htmlFor="weight">lbs</label>
          <button
            className="mx-2 border border-solid rounded px-1 pb-1"
            type="submit"
          >
            save
          </button>
        </form>
      </div>
    </section>
  );
};

export default Main;
