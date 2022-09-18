import { useContext, createContext, useReducer } from "react";
// import { useDb } from "./Db";

const WishlistContext = createContext({});

const WishlistProvider = ({ children }) => {
  // const { setWishList, wishlist } = useWishList();
  //   const { dataBase } = useDb();

  const WishlistReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_WISHLIST":
        return {
          ...state,
          wishlistitem: [...state.wishlistitem, action.payload],
          // state.wishlistitem.findIndex(
          //   (item) => item.id === action.payload.id
          // ) === -1
          //   ? [...state.wishlistitem, action.payload]
          //   : state.wishlistitem.filter(
          //       (item) => item.id !== action.payload.id
          //     ),
        };

      //   case "INCREMENT":
      //     return {
      //       ...state,
      //       Wishlistlistitem: action.payload,
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
      case "REMOVE_FROM_WISHLIST":
        return {
          ...state,
          wishlistitem: state.wishlistitem.filter(
            (item) => item.id !== action.payload.id
          ),
        };

      default:
        return state;
    }
  };
  const wishlistObj = {
    wishlistitem: [],
  };
  const [wishliststate, wishlistdispatch] = useReducer(
    WishlistReducer,
    wishlistObj
  );

  return (
    <WishlistContext.Provider
      value={{
        wishliststate,
        wishlistdispatch,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WishlistProvider };
