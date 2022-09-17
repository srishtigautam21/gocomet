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

  //   const addToCart = async (product) => {
  //     setAddToCartLoading(true);
  //     const encodedToken = localStorage.getItem("nurishToken");
  //     const config = { headers: { authorization: encodedToken } };
  //     try {
  //       const response = await axios.post(
  //         "/api/user/cart",
  //         { product: product },
  //         config
  //       );
  //       dispatch({ type: "ADD_TO_CART", productCard: response.data.cart });
  //       setAddToCartLoading(false);
  //       addToCartToast("Added To Cart");
  //     } catch (e) {
  //       console.error(e);
  //       errorToast("Some Unwanted error occured");
  //     }
  //   };

  //   const deleteFromCart = async (productId) => {
  //     const encodedToken = localStorage.getItem("nurishToken");
  //     const config = { headers: { authorization: encodedToken } };
  //     try {
  //       const response = await axios.delete(
  //         `/api/user/cart/${productId}`,
  //         config
  //       );
  //       dispatch({ type: "REMOVE_FROM_CART", productCard: response.data.cart });
  //       deleteFromCartToast("Removed From Cart");
  //     } catch (e) {
  //       console.error(e);
  //       errorToast("Some Unwanted error occured");
  //     }
  //   };

  // const increaseQuantity = async (productId) => {
  //   const encodedToken = localStorage.getItem("nurishToken");
  //   const config = {
  //     headers: {
  //       authorization: encodedToken,
  //     },
  //   };
  //   try {
  //     const response = await axios.post(
  //       `/api/user/cart/${productId}`,
  //       { action: { type: "increment" } },
  //       config
  //     );
  //     dispatch({ type: "INCREMENT", productCard: response.data.cart });
  //   } catch (e) {
  //     console.error(e);
  //     errorToast("Some Unwanted error occured");
  //   }
  // };

  // const decreaseQuantity = async (productId) => {
  //   try {
  //     const encodedToken = localStorage.getItem("nurishToken");
  //     const config = { headers: { authorization: encodedToken } };
  //     const response = await axios.post(
  //       `/api/user/cart/${productId}`,
  //       { action: { type: "decrement" } },
  //       config
  //     );
  //     dispatch({ type: "DECREMENT", productCard: response.data.cart });
  //   } catch (e) {
  //     console.error(e);
  //     errorToast("Some Unwanted error occured");
  //   }
  // };

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