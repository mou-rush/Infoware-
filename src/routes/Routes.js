import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../components/products/Products";

function AppRoutes({ productItems }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products productItems={productItems} />}>
          {/* <Products /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
