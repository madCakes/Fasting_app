import React from "react";

const Main = () => {
  return (
    <main className="flex flex-col mt-2 mx-5">
      <div className="flex p-2 border-solid border-2 border-slate-900 rounded">
        <div className="m-1">Fasting chart</div>
        <div className="m-1">
          <p></p>
          <p>fasting time remaining </p>
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
      </div>
    </main>
  );
};

export default Main;
