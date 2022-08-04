import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://i.pinimg.com/originals/40/f6/36/40f6367ea5be8eae7923585a5fe8cb82.jpg"
          // src="https://i.pinimg.com/originals/5e/ce/6a/5ece6a43adbc45a65065952b984fa0cb.jpg"
          className="card-img"
          alt="background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder text-black mb-0">NEW PRODUCT ARRIVALS</h5>
            <p className="card-text text-black lead fs-2">
              CHECK OUT OUR FEATURED PRODUCTS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
