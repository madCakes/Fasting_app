import { React, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "../../utils/Data"
import PieChart from "../PieChart";

import { WeightForm } from "../";

Chart.register(CategoryScale);

const Main = () => {
  const [water, setWater] = useState(0);
  const [weight, setWeight] = useState(0);
  const [steps, setSteps] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "rgb(5 150 105)"
        ],
        borderColor: "none",
        borderWidth: 0
      }
  ]
  });


  const timeRemaining = "00:00:00"
  return (
    <section className="flex flex-col mt-2 mx-5">
      <div className="flex p-2 border-solid border-2 border-slate-900 rounded">
        <div className="my-auto mx-10">
        <PieChart chartData={chartData} />
        </div>
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
