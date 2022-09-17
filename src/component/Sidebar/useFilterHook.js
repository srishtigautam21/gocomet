import { useFilter } from "../../context/FilterContext";
import {
  getBrandFilter,
  getPriceFilter,
  getGenderFilter,
  getFinalFilter,
} from "./ProductFilterFunction";

const useFilterHook = () => {
  const { filterState } = useFilter();

  const {
    sortByGender,
    filterByBrands,
    filterByPrice,
    sortBy,
    updatedProductList,
  } = filterState;

  const filteredData = [...updatedProductList];

  const brandsFilterData = getBrandFilter(filteredData, filterByBrands);

  const priceFilterData = getPriceFilter(brandsFilterData, filterByPrice);

  const genderFilterData = getGenderFilter(priceFilterData, sortByGender);

  const finalFilterData = getFinalFilter(genderFilterData, sortBy);

  if (finalFilterData.length === 0) {
    return updatedProductList;
  }
  return finalFilterData; //Final data after all filters are applied
};
export { useFilterHook };
