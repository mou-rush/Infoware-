import React, { useState } from "react";
import "./Card.css";

function Cart({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) {
  const [input, setInput] = useState(""); // '' is the initial state value

  const finalTotalPrice = () => {
    let totalProductAmount = 0;

    if (cartItems != null && cartItems.length > 0) {
      cartItems.forEach((item, index) => {
        totalProductAmount += Number(item.quantity * item.price);
      });
    }
    if (input === "less10") {
      let discount = 10 / 100;
      totalProductAmount = totalProductAmount - totalProductAmount * discount;
    }
    if (input === "less15") {
      let discount = 15 / 100;
      totalProductAmount = totalProductAmount - totalProductAmount * discount;
    }
    return Number(totalProductAmount).toFixed(2);
  };

  return (
    <div className="cart-items">
      <h2 className="cart-items-header">Cart Items</h2>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleCartClearance}>
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <div className="empty-cart">cart is empty</div>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img
              className="cart-items-image"
              src={item.image}
              alt={item.name}
            />
            <div className="cart-items-name">{item.name}</div>

            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price">
              {item.quantity} * &#8377;
              {item.price}
            </div>
          </div>
        ))}
      </div>

      <div className="cart-items-total-price-name">
        <p>Promo Code</p>
        <div className="cart-items-total-price">
          {" "}
          <input
            type="text"
            style={{ padding: 3 }}
            value={input}
            placeholder="Enter Coupon"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
      <div className="cart-items-total-price-name">
        <p>Total Price</p>
        <div className="cart-items-total-price">&#8377;{finalTotalPrice()}</div>
      </div>
    </div>
  );
}

export default Cart;
