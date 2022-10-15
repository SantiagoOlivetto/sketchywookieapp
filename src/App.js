import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/Main/About";
import Cart from "./components/Main/Cart";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
import ItemListContainer from "./components/Main/ItemListContainer";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home name={"Traveler"} />} />
            <Route path="/comics" element={<ItemListContainer />} />
            <Route path="/comics/:param" element={<ItemListContainer />} />
            <Route path="/comics/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
