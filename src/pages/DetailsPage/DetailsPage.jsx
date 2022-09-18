import React from "react";
import "./DetailsPage.css";
import { useSingleProduct } from "../../context/SingleProductContext";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useDocumentTitle } from "../../useDocumentTitle";

const DetailsPage = () => {
  useDocumentTitle("Single Product Page");
  const { productSelected } = useSingleProduct();
  const { brand, category, price } = productSelected;
  const { dispatch, state } = useCart();
  const { cartlistitem } = state;
  const { wishlistdispatch, wishliststate } = useWishlist();
  const { wishlistitem } = wishliststate;
  const isInCart = cartlistitem.findIndex(
    (item) => item.id === productSelected.id
  );
  const isInWishlist = wishlistitem.findIndex(
    (item) => item.id === productSelected.id
  );
  return (
    <div className='Details-page'>
      <img src={productSelected.image} alt={brand} />

      <div className='product-details'>
        <h2>{brand}</h2>
        <p>{category}</p>
        <div>
          <strong>Rs. {price}</strong>
        </div>
        {isInCart === -1 ? (
          <button
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: productSelected })
            }
            className='button card-button ecom-card-button'
          >
            Add To Cart
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: productSelected })
            }
            className='button card-button ecom-card-button'
          >
            Remove From Cart
          </button>
        )}
        {isInWishlist === -1 ? (
          <button
            className='button outline-button card-button ecom-card-button'
            onClick={() =>
              wishlistdispatch({
                type: "ADD_TO_WISHLIST",
                payload: productSelected,
              })
            }
          >
            Add To Wishlist
          </button>
        ) : (
          <button
            className='button outline-button card-button ecom-card-button'
            onClick={() =>
              wishlistdispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: productSelected,
              })
            }
          >
            Remove From Wishlist
          </button>
        )}
      </div>
    </div>
  );
};

export { DetailsPage };
