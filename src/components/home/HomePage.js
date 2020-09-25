import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

const HomePage = (props) => (
  <div className="jumbtron">
    <div className="container">
      <h1 className="text-center">Product List</h1>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Weight</th>
            <th>Availability</th>
            <th>IsEditable</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.weight}</td>
                <td>{product.availability}</td>
                <td>
                  {product.isEditable ? (
                    <Link
                      to={{
                        pathname: "/edit-product",
                        product: product, // your data array of objects
                      }}
                      state={product}
                    >
                      Edit
                    </Link>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

HomePage.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
