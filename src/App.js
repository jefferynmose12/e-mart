import './App.css';
import Header from './components/pages/header/Header';
import Home from './components/pages/Home'
import Products from './components/pages/Products';
import Cart from './components/pages/Cart'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Checkout from './components/pages/Checkout'
import SingleProduct from './components/pages/SingleProduct';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:proid" element={<SingleProduct />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
