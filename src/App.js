import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import data from "./Data";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (products) => {
    const exist = cartItems.find((x) => x.id === products.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...products, qty: 1 }]);
    }
  };
  const onRemove = (products) => {
    const exist = cartItems.find((x) => x.id === products.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== products.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === products.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="row">
        <Main onAdd={onAdd} products={products} />
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
