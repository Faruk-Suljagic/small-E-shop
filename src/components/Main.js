import React from "react";
import Product from "./Product";

const Main = (props) => {
  const { products, onAdd } = props;

  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((prod) => (
          <Product onAdd={onAdd} key={prod.id} product={prod}></Product>
        ))}
      </div>
    </div>
  );
};

export default Main;
