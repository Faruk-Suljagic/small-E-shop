import React from "react";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2 style={{ width: "100%" }}>Cart Items</h2>
      <div>{cartItems.length === 0 && <h2> Cart is empty </h2>}</div>
      {cartItems.map((itm) => {
        return (
          <div key={itm.id} className="row">
            <div>
              <hr />
              <strong>{itm.name}</strong>
            </div>
            <div className="colFix">
              <button onClick={() => onAdd(itm)} className="add">
                +
              </button>
              <h4>{itm.length}</h4>
              <button onClick={() => onRemove(itm)} className="remove">
                -
              </button>
            </div>
            <div className="right shadowBox">
              {itm.qty} x ${itm.price.toFixed(2)}
            </div>
          </div>
        );
      })}
      {cartItems.length !== 0 && (
        <div className="hrLine">
          <hr />
          <div className="row shadowBox">
            <div className="col-2">Items Price</div>
            <hr />
            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
          </div>

          <div className="row shadowBox">
            <div className="col-2">Tax Price</div>
            <hr />
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>

          <div className="row shadowBox">
            <div className="col-2">Shipping Price</div>
            <hr />
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row shadowBox-white">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
