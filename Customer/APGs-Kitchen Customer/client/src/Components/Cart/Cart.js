import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../Product/actions/cartActions";
import Recipe from "./Recipe";
import "bootstrap/dist/css/bootstrap.css";
import "./Cart.css";
import { BsFilePlus, BsFileMinus, BsDashCircleFill } from "react-icons/bs";

class CartPage extends Component {
  //to remove the item completely
  handleRemove = (foodId) => {
    this.props.removeItem(foodId);
  };
  //to add the quantity
  handleAddQuantity = (foodId) => {
    this.props.addQuantity(foodId);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (foodId) => {
    this.props.subtractQuantity(foodId);
  };

  render() {
    console.log({ 123: this.props.items, 111111: this.props.addedItems });

    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <li className="collection-item avatar" key={item.foodId}>
            <div className="cartbox">
              <div className="cartimg-cartbox">
                <img src={item.url} alt={item.url} />
              </div>
            </div>

            <div className="item-desc">
              <span className="title">{item.title}</span>
              <p>{item.description}</p>
              <p>
                <b>Price: ₹ {item.price}</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleAddQuantity(item.foodId);
                    }}
                  >
                    <BsFilePlus />
                  </i>
                </Link>
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleSubtractQuantity(item.foodId);
                    }}
                  >
                    <BsFileMinus />
                  </i>
                </Link>
              </div>
              <button
                className="material-icons"
                onClick={() => {
                  this.handleRemove(item.foodId);
                }}
              >
                <BsDashCircleFill />
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>
        Order something from our delicious restaturant.{" "}
        <a href="/leftmenu">menu</a>
      </p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
        <Recipe />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log({ state });
  return {
    items: state.addedItems,
    addedItems: state.addedItems,
    total: state.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (foodId) => {
      dispatch(removeItem(foodId));
    },
    addQuantity: (foodId) => {
      dispatch(addQuantity(foodId));
    },
    subtractQuantity: (foodId) => {
      dispatch(subtractQuantity(foodId));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
