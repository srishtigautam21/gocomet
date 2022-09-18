import React from "react";

const WishlistCard = ({ product, dispatch, cartdispatch, cartstate }) => {
  const { brand, category, price, image } = product;
  const { cartlistitem } = cartstate;
  const isInCart = cartlistitem.findIndex((item) => item.id === product.id);
  return (
    <div className='parent-positioning card-container'>
      <img src={image} alt={brand}></img>
      <div className='inside-container '>
        <h3>{brand}</h3>
        <p>{category}</p>
        <div>Rs. {price}</div>
        {isInCart === -1 ? (
          <button
            onClick={() =>
              cartdispatch({ type: "ADD_TO_CART", payload: product })
            }
            className='button card-button ecom-card-button'
          >
            Add To Cart
          </button>
        ) : (
          <button
            onClick={() =>
              cartdispatch({ type: "REMOVE_FROM_CART", payload: product })
            }
            className='button card-button ecom-card-button'
          >
            Remove From Cart
          </button>
        )}
        <i
          className='fa fa-heart icon-btn icon-size filled-icon-overlay'
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_WISHLIST",
              payload: product,
            })
          }
        ></i>
      </div>
    </div>
  );
};

export { WishlistCard };
