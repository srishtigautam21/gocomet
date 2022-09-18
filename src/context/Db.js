import { useContext, createContext, useState } from "react";

import products from "../Database.json";

const DataBase = createContext({});

const DataBaseProvider = ({ children }) => {
  const [dataBase, setDataBase] = useState(products);

  return (
    <DataBase.Provider value={{ dataBase, setDataBase }}>
      {children}
    </DataBase.Provider>
  );
};

const useDb = () => useContext(DataBase);
export { useDb, DataBaseProvider };
