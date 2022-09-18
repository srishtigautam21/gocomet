import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import ReactDom from "react-dom";
import { WishlistCard } from "../../component/Card/WishlistCard";
import "./WishlistModal.css";
const WishlistModal = ({ setOpenModalWishlist }) => {
  const { wishliststate, wishlistdispatch } = useWishlist();
  const { wishlistitem } = wishliststate;
  const { state, dispatch } = useCart();
  return ReactDom.createPortal(
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='btn-cross-modal'>
          <button
            className='btn-cross'
            onClick={() => setOpenModalWishlist(false)}
          >
            X
          </button>
        </div>
        <h1 className='cart-page-header'> Wishlist</h1>
        <h2 className='cart-page-header'>
          Your Wishlist has {wishlistitem.length} Items
        </h2>
        <main className='cart-page-container'>
          <div className='horizontal-cards'>
            {wishliststate.wishlistitem.map((item) => {
              return (
                <WishlistCard
                  key={item.id}
                  product={item}
                  state={wishliststate}
                  dispatch={wishlistdispatch}
                  cartstate={state}
                  cartdispatch={dispatch}
                />
              );
            })}
          </div>
          {/* {state.cartlistitem.length > 0 && <PriceCard state={state} />} */}
        </main>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
export { WishlistModal };
