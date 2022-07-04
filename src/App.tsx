import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Wrap from "./components/Wrap";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { useState } from "react";
import { CartProvider } from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header>
          <Navbar />
          <Cart />
        </Header>
        <Wrap>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Wrap>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
