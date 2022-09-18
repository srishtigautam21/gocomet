import { useContext, createContext, useReducer } from "react";

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartlistitem: [...state.cartlistitem, action.payload],
        };

      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartlistitem: state.cartlistitem.filter(
            (item) => item.id !== action.payload.id
          ),
        };

      default:
        return state;
    }
  };
  const cartObj = {
    cartlistitem: [],
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
