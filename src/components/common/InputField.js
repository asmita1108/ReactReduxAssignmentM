import React from "react";

const InputField = (props) => {
  return (
    <div className="form-group">
      <div className="input-group row">
        <label className="col-sm-3 col-form-label textLabel">
          {props.label}
        </label>
        <div className="col-sm-9">
          {props.span ? (
            <div className="row">
              <span className="input-group-addon col-sm-1">
                {props.spanSign}
              </span>
              <input
                type={props.type}
                className="form-control col-sm-11"
                id={props.label}
                placeholder={props.placeholder}
                onChange={props.handleChange}
                required={props.required}
              ></input>
            </div>
          ) : (
            <div className="row">
              <input
                type={props.type}
                className="form-control col-sm-12"
                id={props.label}
                placeholder={props.placeholder}
                onChange={props.handleChange}
              ></input>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputField;
