import "./Card.css";
import { useSingleProduct } from "../../context/SingleProductContext";
import { useNavigate } from "react-router-dom";

import { useWishlist } from "../../context/WishlistContext";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const { setProductSelected } = useSingleProduct();
  const { brand, category, price, image } = product;
  const { wishliststate, wishlistdispatch } = useWishlist();
  const { wishlistitem } = wishliststate;

  const isInWishlist = wishlistitem.findIndex((item) => item.id === product.id);
  return (
    <div
      onClick={() => {
        setProductSelected(product);
        navigate("/productDetailsPage");
      }}
    >
      <div className='parent-positioning card-container'>
        <img src={image} alt={brand}></img>
        <div className='inside-container '>
          <h3>{brand}</h3>

          <p>{category}</p>
          <div>Rs. {price}</div>
          {isInWishlist === -1 ? (
            <i
              className='fa fa-heart-o icon-btn icon-size icon-overlay'
              onClick={(e) => {
                e.stopPropagation();
                wishlistdispatch({ type: "ADD_TO_WISHLIST", payload: product });
              }}
            ></i>
          ) : (
            <i
              className='fa fa-heart icon-btn icon-size filled-icon-overlay'
              onClick={(e) => {
                e.stopPropagation();
                wishlistdispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: product,
                });
              }}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export { Card };
