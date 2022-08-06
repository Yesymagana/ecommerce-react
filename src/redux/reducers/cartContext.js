import React, { useContext, useReducer, useState } from "react";
import { cartReducer } from "./Reducers";

const CartContext = React.createContext();

const CartProvider = (props) => {
  const [productsInCart] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, {
    cart: productsInCart,
  });

  return (
    <CartContext.Provider value={{ productsInCart, state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
export const CartState = () => {
  return useContext(CartContext);
};