import React from "react";
import "./Product.css";

function Products({ productItems }) {
  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div>
          <img
            className="product-image"
            src={productItem.image}
            alt={productItem.name}
          />
        </div>
      ))}
    </div>
  );
}

export default Products;
