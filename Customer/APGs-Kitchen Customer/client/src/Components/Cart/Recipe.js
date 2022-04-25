import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./Cart.css";
import { Link } from "react-router-dom";
class Recipe extends Component {
  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.substractShipping();
  }

  handleChecked = (e) => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  render() {
    return (
      <div className="recbox">
        <div className="collection">
          <li className="collection-item">
            <label>
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChecked}
              />
            </label>
          </li>
          <li className="collection-item">
            <b>Total: ₹ {this.props.total} </b>
          </li>
        </div>
        <div className="checkout">
          <Link to="/checkout">
            <button className="waves-effect waves-light btn">Checkout</button>
          </Link>
        </div>
        <div className="checkout">
          <Link to="/signup">
            <button className="waves-effect waves-light btn">Sign Up</button>
          </Link>
        </div>
        <div className="checkout">
          <Link to="/login">
            <button className="waves-effect waves-light btn">Sign In</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
