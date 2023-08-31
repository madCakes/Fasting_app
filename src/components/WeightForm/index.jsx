import React from "react";

const WeightForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
        className="mx-2 border-2 border-solid rounded px-1 pb-1"
        type="submit"
      >
        save
      </button>
    </form>
  );
};

export default WeightForm;
