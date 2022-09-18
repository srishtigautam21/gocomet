import { useContext, createContext, useReducer } from "react";

const WishlistContext = createContext({});

const WishlistProvider = ({ children }) => {
  const WishlistReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_WISHLIST":
        return {
          ...state,
          wishlistitem: [...state.wishlistitem, action.payload],
        };

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
