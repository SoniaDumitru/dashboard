import React from 'react';

const Filters = (props) => {
  return (
    <div>
      <strong>Sort by: </strong>
        <label className="standard-color">
          <input
          type="radio"
          value="Alphabetically"
          checked={props.sortBy === "Alphabetically"}
          onChange={props.handleRadio}
          />
          Alphabetically
        </label>
        <label className="standard-color">
          <input
          type="radio"
          value="Watchers"
          checked={props.sortBy === "Watchers"}
          onChange={props.handleRadio}
          />
          Watchers
        </label>
        <label className="standard-color">
          <input
          type="radio"
          value="Stars"
          checked={props.sortBy === "Stars"}
          onChange={props.handleRadio}
          />
          Stars
        </label>
        <label className="standard-color">
          <input
          type="radio"
          value="Forks"
          checked={props.sortBy === "Forks"}
          onChange={props.handleRadio}
          />
          Forks
        </label>
        <label className="standard-color">
          <input
          type="radio"
          value="Best Overall"
          checked={props.sortBy === "Best Overall"}
          onChange={props.handleRadio}
          />
          Best Overall
        </label>
    </div>
  );
};

export default Filters;