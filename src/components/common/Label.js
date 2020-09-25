import React from "react";

const Label = (props) => {
  return (
    <div className="row">
      <div className="col col-sm-6 textLabel ">
        <strong>{props.label}</strong>
      </div>
      <div className="col col-sm-6 textLabel">${props.value}</div>
    </div>
  );
};
export default Label;
