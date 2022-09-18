import { useContext, createContext, useState } from "react";

import products from "../Database.json";

const DataBase = createContext({});

const DataBaseProvider = ({ children }) => {
  const [dataBase, setDataBase] = useState(products);
  //   const dataBaseHandler = async () => {
  //     try {
  //       const response = await axios.get(
  //         // `https://fakestoreapi.com/products/category/men's clothing`
  //         "../Database.js"
  //       );
  //       console.log(response);
  //       setDataBase(response);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   useEffect(() => {
  //     dataBaseHandler();
  //   }, []);
  return (
    <DataBase.Provider value={{ dataBase, setDataBase }}>
      {children}
    </DataBase.Provider>
  );
};

const useDb = () => useContext(DataBase);
export { useDb, DataBaseProvider };
