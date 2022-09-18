import React from "react";
import "./DetailsPage.css";
import { useSingleProduct } from "../../context/SingleProductContext";

const DetailsPage = () => {
  const { productSelected } = useSingleProduct();
  const { brand, category, price } = productSelected;
  return (
    <div className='Details-page'>
      {/* <img src="" alt="" /> */}
      <div className='product-details'>
        <h3>{brand}</h3>
        <p>{category}</p>
        <div>{price}</div>
        {/* {isInCart === -1 ? (
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            className='button card-button ecom-card-button'
          >
            Add To Cart
          </button>
        ) : (
          <button className='button outline-button card-button ecom-card-button'>
            Remove from Cart
          </button>
        )} */}
      </div>
    </div>
  );
};

export { DetailsPage };
