import "./CartCard.css";

const CartCard = ({ product, dispatch, wishlistdispatch, wishliststate }) => {
  const { brand, category, price, image } = product;
  const { wishlistitem } = wishliststate;
  const isInWishlist = wishlistitem.findIndex((item) => item.id === product.id);
  return (
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
        <button
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: product })
          }
          className='button card-button ecom-card-button'
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export { CartCard };
