import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer";

import Home from "./Pages/Home/";
import Cart  from "./Pages/Cart/Cart";

import "./App.css";
import { CartProvider } from "./Contexts/CartContext/CartContext";

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart"  element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;
