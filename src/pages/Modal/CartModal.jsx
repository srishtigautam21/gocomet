import { useCart } from "../../context/CartContext";
import ReactDom from "react-dom";
import { CartCard } from "../../component/Card/CartCard";
import "./CartModal.css";
const CartModal = ({ setOpenModalCart }) => {
  const { state, dispatch } = useCart();
  const { cartlistitem } = state;

  return ReactDom.createPortal(
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='btn-cross-modal'>
          <button className='btn-cross' onClick={() => setOpenModalCart(false)}>
            X
          </button>
        </div>
        <h1 className='cart-page-header'>My Cart</h1>
        <h2 className='cart-page-header'>
          Your Cart has {cartlistitem.length} Items
        </h2>
        <main className='cart-page-container'>
          <div className='horizontal-cards'>
            {state.cartlistitem.map((item) => {
              return (
                <CartCard
                  key={item.id}
                  product={item}
                  state={state}
                  dispatch={dispatch}
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
export { CartModal };