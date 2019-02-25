import React from "react";

const options = {
  all: "All",
  active: "Active",
  completed: "Completed"
};

export default function Filter(props) {
  const { change } = props;

  return (
    <div>
      {Object.keys(options).map(key => (
        <button
          type="button"
          className="btn btn-outline-dark"
          key={key}
          onClick={() => change(key)}
        >
          {options[key]}
        </button>
      ))}
    </div>
  );
}
