import React from "react";
import { NavLink } from "react-router-dom";
import { CartState } from "../redux/reducers/cartContext";

export default function Cart() {

  const {
    state: { cart },
    dispatch,
  } = CartState();

  
    return (
      <div>
        {cart.map((product) => (
          <div>
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    );
  };

  const emptyCart = () => {
    return (
        <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
                <div className="row">
                    <h3>Your Cart is Empty</h3>
                </div>
            </div>
        </div>
    );
  }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">Proceed to Checkout</NavLink>
                </div>
            </div>
        )
    }

