import React from "react";

const RadioButton = (props) => {
  return (
    <form className="row" onClick={props.onChange}>
      <label className="col-sm-3 col-form-label textLabel">{props.label}</label>
      <div className="col-sm-9">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="budget"
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            budget
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="premier"
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            premier
          </label>
        </div>
      </div>
    </form>
  );
};

export default RadioButton;
