import React from "react";
// import { NavLink } from "react-router-dom";
import { CartState } from "../redux/reducers/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2 style={{ marginBottom: "40px" }}>
        Your Cart
        <br />
        <FontAwesomeIcon icon={faShoppingCart} />
      </h2>
      {cart.map((product) => (
        <div  style={{ display: "flex", alignItems: "center" }}>
          <img style={{height: "150px", width: "auto"}} src={product.image} alt="product" />
          <p style={{ fontSize: 25, fontWeight: 600 }}>{product.title}</p>
          <p>
            <b>Rating:</b>
            <br />
            {product.rating && product.rating.rate}
          </p>
          <p>
            <b>Description:</b>
            <br />
            {product.description}
          </p>
          <p>
            <b>Quantity:</b>
            <br />
            {product.qty}
          </p>
          <p>
            <b>Price:</b>
            <br />${product.price.toFixed(2)}
          </p>
          <button style={{padding: "8px", margin: "5px", borderRadius: "20px"}}
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_CART", payload: product });
            }}
            className="Remove-Button"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

// const emptyCart = () => {
//   return (
//       <div className="px-4 my-5 bg-light rounded-3 py-5">
//           <div className="container py-4">
//               <div className="row">
//                   <h3>Your Cart is Empty</h3>
//               </div>
//           </div>
//       </div>
//   );
// }

//   const button = () => {
//       return (
//           <div className="container">
//               <div className="row">
//                   <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">Proceed to Checkout</NavLink>
//               </div>
//           </div>
//       )
//   }
