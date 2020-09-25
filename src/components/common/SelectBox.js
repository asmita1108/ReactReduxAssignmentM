import React from "react";

const SelectBox = (props) => {
  return (
    <div className="form-group">
      <div className="input-group row">
        <label className="col-sm-3 col-form-label textLabel">
          {props.label}
        </label>

        <select
          className="form-control col-sm-9"
          id="exampleFormControlSelect1"
          onChange={props.handleChange}
          required
        >
          <option key="Price-tier">Choose price</option>
          {props.pricetier.map((price) => {
            return <option key={price}>{price}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
export default SelectBox;
