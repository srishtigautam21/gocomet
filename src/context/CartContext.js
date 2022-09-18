import { useContext, createContext, useReducer } from "react";
// import { useDb } from "./Db";

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  // const { setWishList, wishlist } = useWishList();
  //   const { dataBase } = useDb();

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartlistitem:
            state.cartlistitem.findIndex(
              (item) => item.id === action.payload.id
            ) === -1
              ? [...state.cartlistitem, action.payload]
              : state.cartlistitem.filter(
                  (item) => item.id !== action.payload.id
                ),
        };

      //   case "INCREMENT":
      //     return {
      //       ...state,
      //       cartlistitem: action.payload,
      //     };

      //   case "DECREMENT":
      //     return {
      //       ...state,
      //       cartlistitem: action.payload,
      //     };

      //   case "MOVE_TO_CART":
      //     return {
      //       ...state,
      //       cartlistitem: [...state.cartlistitem, action.productCard],
      //     };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartlistitem: action.productCard,
        };

      default:
        return state;
    }
  };
  const cartObj = {
    //   cartCount: 0,
    cartlistitem: [],
    //   totalPrice: 0,
    //   productCount: 1,
  };
  const [state, dispatch] = useReducer(cartReducer, cartObj);

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
