import './App.module.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import {Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/ProductDetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
