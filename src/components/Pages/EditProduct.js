import React, { Component } from "react";
import InputField from "../common/InputField";
import SelectBox from "../common/SelectBox";
import RadioButton from "../common/RadioButton";

class EditProduct extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      price: "",
      weight: "",
      availability: 0,
      productUrl: "",
      isEditable: false,
      pricingTier: "",
      pricetier: {
        budget: ["4k - 6k", "6k - 9k", "9k - 11k"],
        premier: ["11k - 20k", "20k - 30k", "30k+"],
      },
    };
  }
  handlePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };
  handleProductName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleURL = (e) => {
    this.setState({
      productUrl: e.target.value,
    });
  };
  handleAvailability = (e) => {
    this.setState({
      availability: e.target.value,
    });
  };
  handleProductWeight = (e) => {
    this.setState({
      weight: e.target.value,
    });
  };
  setPricingtier = (e) => {
    this.setState({
      pricingTier: e.target.value,
    });
  };
  isEditableClicked = (e) => {
    this.setState({
      isEditable: !this.state.isEditable,
    });
  };
  renderPricing = () => {
    const { pricetier, pricingTier } = this.state;
    if (pricingTier === "budget") {
      return (
        <SelectBox
          label="Price range:"
          handleChange={this.handlePrice}
          pricetier={pricetier.budget}
          stateTier={this.state.pricingTier}
        />
      );
    } else if (pricingTier === "premier") {
      return (
        <SelectBox
          label="Price range:"
          handleChange={this.handlePrice}
          pricetier={pricetier.premier}
          stateTier={this.state.pricingTier}
        />
      );
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { product } = this.props.location;
    const {
      name,
      productUrl,
      weight,
      price,
      pricingTier,
      isEditable,
      availability,
    } = this.state;
    console.log(name);
    if (name && productUrl && weight && pricingTier && price) {
      product.name = name;
      product.productUrl = productUrl;
      product.weight = weight;
      product.priceRange = price;
      product.pricingTier = pricingTier;
      product.isEditable = isEditable;
      product.availability = availability;
    } else {
      alert("Fill the details");
    }
  };
  render() {
    const { product } = this.props.location;
    console.log(product);
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <InputField
            type="text"
            handleChange={this.handleProductName}
            placeholder={product.name}
            label="Name:"
            span={false}
            required={true}
          />
          <InputField
            type="text"
            handleChange={this.handleProductWeight}
            placeholder={`${product.weight}gms`}
            label="Weight:"
            span={false}
            required={true}
          />
          <InputField
            type="number"
            handleChange={this.handleAvailability}
            placeholder={product.availability}
            label="Available:"
            span={false}
            required={false}
          />
          <InputField
            type="text"
            handleChange={this.handleURL}
            placeholder={product.productUrl}
            label="Product Url:"
            span={false}
            required={true}
          />
          <RadioButton label="Price Tier" onChange={this.setPricingtier} />
          {this.renderPricing()}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="defaultCheck1"
              required
              onClick={this.isEditableClicked}
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Is Editable
            </label>
          </div>
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}
export default EditProduct;
