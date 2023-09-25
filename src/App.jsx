import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Footer from "./components/Footer";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <BrowserRouter>
        <NavBar cartItems={cartItems} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route
            path="cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />

          <Route path="details/:itemId" element={<Details />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
