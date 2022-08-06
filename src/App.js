import "./App.module.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import { HashRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { CartProvider } from "./redux/reducers/cartContext";

function App() {
  return (
    <>
      <CartProvider>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </HashRouter>
      </CartProvider>
    </>
  );
}

export default App;
