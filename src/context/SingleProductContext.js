import { useContext, createContext, useState } from "react";

const SingleProductContext = createContext({});

const SingleProductProvider = ({ children }) => {
  const [productSelected, setProductSelected] = useState(null);
  return (
    <SingleProductContext.Provider
      value={{ productSelected, setProductSelected }}
    >
      {children}
    </SingleProductContext.Provider>
  );
};
const useSingleProduct = () => useContext(SingleProductContext);
export { SingleProductProvider, useSingleProduct };
