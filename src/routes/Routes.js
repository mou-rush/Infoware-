import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../components/products/Products";
import SignUp from "../components/signUp/SignUp";
import Cart from "../components/cart/Cart";

function AppRoutes({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        />

        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default AppRoutes;
