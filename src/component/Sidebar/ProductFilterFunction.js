const getBrandFilter = (updatedProductList, filterByBrands) => {
  if (filterByBrands.length > 0) {
    return updatedProductList.filter((product) =>
      filterByBrands.includes(product.brand)
    );
  } else {
    return updatedProductList;
  }
};

const getPriceFilter = (brandsFilterData, filterByPrice) => {
  if (filterByPrice.length > 0) {
    if (filterByPrice === "low") {
      return brandsFilterData.filter(
        (product) => product.price >= 500 && product.price < 999
      );
    } else if (filterByPrice === "mid") {
      return brandsFilterData.filter(
        (product) => product.price >= 1000 && product.price < 2000
      );
    } else {
      return brandsFilterData.filter(
        (product) => product.price >= 2000 && product.price < 3000
      );
    }
  } else {
    return brandsFilterData;
  }
};

const getGenderFilter = (priceFilterData, sortByGender) => {
  if (sortByGender === "men") {
    return priceFilterData.filter((product) => product.type === "men");
  } else if (sortByGender === "women") {
    return priceFilterData.filter((product) => product.type === "women");
  } else {
    return priceFilterData;
  }
};
const getFinalFilter = (genderFilterData, sortBy) => {
  if (sortBy === "lowToHigh") {
    return genderFilterData.sort((prod1, prod2) => prod1.price - prod2.price);
  } else if (sortBy === "highToLow") {
    return genderFilterData.sort((prod1, prod2) => prod2.price - prod1.price);
  } else if (sortBy === "recommended") {
    return genderFilterData.filter(
      (product) => product.sortBy !== "recommended"
    );
  } else if (sortBy === "new") {
    return genderFilterData.filter((product) => product.sortBy !== "new");
  } else {
    return genderFilterData;
  }
};

export { getBrandFilter, getPriceFilter, getGenderFilter, getFinalFilter };
