import React from "react";
import { NavLink } from "react-router-dom";
import { CartState } from "../../redux/reducers/cartContext";

export default function CartBtn() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <NavLink to="/cart" className="btn btn-outline-dark ms-2">
      <span className="fa fa-shopping-cart me-1"></span> Cart 
    </NavLink>
  );
}
