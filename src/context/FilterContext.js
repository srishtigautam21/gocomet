import { useContext, createContext, useReducer, useEffect } from "react";
import { useDb } from "./Db";

const FilterContext = createContext({});

const FilterProvider = ({ children }) => {
  const { dataBase } = useDb();
  useEffect(() => {
    filterDispatch({ type: "initializer", payload: dataBase });
  }, [dataBase]);

  const initialFilterState = {
    sortByGender: "none",
    filterByBrands: [],
    filterByPrice: [],
    sortBy: "none",
    updatedProductList: dataBase,
  };

  const [filterState, filterDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "initializer":
        return {
          ...state,

          updatedProductList: action.payload,
        };
      case "SORTING_BY_GENDER":
        return {
          ...state,
          sortByGender: action.payload,
        };
      case "FILTER_BY_BRAND":
        return {
          ...state,
          filterByBrands: state.filterByBrands.includes(action.payload)
            ? state.filterByBrands.filter((i) => i !== action.payload)
            : [...state.filterByBrands, action.payload],
        };
      case "FILTER_BY_PRICE":
        return {
          ...state,
          filterByPrice: action.payload,
          //   filterByPrice: state.filterByPrice.includes(action.payload)
          //     ? state.filterByPrice.filter((i) => i !== action.payload)
          //     : [...state.filterByPrice, action.payload],
        };
      case "SORT_BY":
        return {
          ...state,
          sortBy: action.payload,
        };
      case "CLEAR_ALL":
        return {
          ...action.payload,
          updatedProductList: [...state.updatedProductList],
        };

      default:
        return [...action.payload];
    }
  }, initialFilterState);

  return (
    <FilterContext.Provider
      value={{ filterDispatch, filterState, initialFilterState }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { useFilter, FilterProvider };
