import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataBaseProvider } from "./context/Db";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { BrowserRouter as Router } from "react-router-dom";
import { SingleProductProvider } from "./context/SingleProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DataBaseProvider>
        <FilterProvider>
          <SingleProductProvider>
            <CartProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </CartProvider>
          </SingleProductProvider>
        </FilterProvider>
      </DataBaseProvider>
    </Router>
  </React.StrictMode>
);
