import React from "react";
import "./Products.css";

function Products({ productItems, handleAddProduct }) {
  return (
    <div>
      <div className="discount-container">
        <blink>Offers</blink>
        <div>
          <p className="coupons">
            <i class="fas fa-tags" />
            15% off up to ₹200 | Use code less15
          </p>
        </div>
        <div>
          <p className="coupons">
            {" "}
            <i class="fas fa-tags" />
            10% off | Use code less10
          </p>
        </div>
      </div>
      <div className="products">
        {productItems.map((productItem) => (
          <div className="card">
            <div>
              <img
                className="product-image"
                src={productItem.image}
                alt={productItem.name}
              />
            </div>

            <div>
              <h3 className="product-name">{productItem.name}</h3>
            </div>

            <div className="product-price">{productItem.price}</div>

            <div>
              <button
                className="product-add-button"
                onClick={() => handleAddProduct(productItem)}
              >
                Add To Card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
