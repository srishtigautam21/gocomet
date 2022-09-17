import React from "react";
import "./SideBar.css";
import { useFilter } from "../../context/FilterContext";

const SideBar = () => {
  const { filterDispatch, filterState, initialFilterState } = useFilter();
  return (
    <>
      <div className='sidebar-header'>
        <h2>Filters</h2>
        <button
          className='text-link md-txt txt-color md-margin'
          onClick={() =>
            filterDispatch({
              type: "CLEAR_ALL",
              payload: {
                ...initialFilterState,
              },
            })
          }
        >
          Clear
        </button>
      </div>
      {/* <h3>Price</h3> */}
      <div className='filter'>
        <label htmlFor='men'>
          <input
            className='margin'
            id='men'
            name='radio-men'
            type='radio'
            onChange={() =>
              filterDispatch({
                type: "SORTING_BY_GENDER",
                payload: "men",
              })
            }
            checked={filterState.sortByGender === "men"}
          />
          Men
        </label>
        <label htmlFor='women'>
          <input
            className='margin'
            id='women'
            name='radio-women'
            type='radio'
            onChange={() =>
              filterDispatch({
                type: "SORTING_BY_GENDER",
                payload: "women",
              })
            }
            checked={filterState.sortByGender === "women"}
          />
          Women
        </label>
      </div>
      <h3>Brands</h3>
      <div className='filter'>
        <label htmlFor='roadster'>
          <input
            className='margin'
            id='roadster'
            name='checkbox-roadster'
            type='checkbox'
            checked={filterState.filterByBrands.includes("Roadster")}
            onChange={() =>
              filterDispatch({
                type: "FILTER_BY_BRAND",
                payload: "Roadster",
              })
            }
          />
          Roadster
        </label>
        <label htmlFor='only'>
          <input
            className='margin'
            id='only'
            name='checkbox-only'
            type='checkbox'
            checked={filterState.filterByBrands.includes("ONLY")}
            onChange={() =>
              filterDispatch({
                type: "FILTER_BY_BRAND",
                payload: "ONLY",
              })
            }
          />
          ONLY
        </label>
        <label htmlFor='arrow'>
          <input
            className='margin'
            id='arrow'
            name='checkbox-arrow'
            type='checkbox'
            checked={filterState.filterByBrands.includes("Arrow")}
            onChange={() =>
              filterDispatch({
                type: "FILTER_BY_BRAND",
                payload: "Arrow",
              })
            }
          />
          Arrow
        </label>
        <label htmlFor='veromoda'>
          <input
            className='margin'
            id='veromoda'
            name='checkbox-veromoda'
            type='checkbox'
            checked={filterState.filterByBrands.includes("VeroModa")}
            onChange={() =>
              filterDispatch({ type: "FILTER_BY_BRAND", payload: "VeroModa" })
            }
          />
          Vero Moda
        </label>
      </div>
      <h3>Price</h3>
      <div className='filter'>
        <label htmlFor='lowPriceRange'>
          <input
            className='margin'
            id='lowPriceRange'
            name='radio-lowPriceRange'
            type='radio'
            checked={filterState.filterByPrice.includes("low")}
            onChange={() =>
              filterDispatch({
                type: "FILTER_BY_PRICE",
                payload: "low",
              })
            }
          />
          500 to 999
        </label>
        <label htmlFor='midPriceRange'>
          <input
            className='margin'
            id='midPriceRange'
            name='radio-midPriceRange'
            type='radio'
            checked={filterState.filterByPrice.includes("mid")}
            onChange={() =>
              filterDispatch({
                type: "FILTER_BY_PRICE",
                payload: "mid",
              })
            }
          />
          1000 to 1999
        </label>
        <label htmlFor='highPriceRange'>
          <input
            className='margin'
            id='highPriceRange'
            name='radio-highPriceRange'
            type='radio'
            checked={filterState.filterByPrice.includes("high")}
            onChange={() =>
              filterDispatch({
                type: "FILTER_BY_PRICE",
                payload: "high",
              })
            }
          />
          2000 to 2999
        </label>
      </div>
      <h3>SortBy</h3>
      <div className='filter'>
        <label htmlFor='lowToHigh'>
          <input
            className='margin'
            id='lowToHigh'
            name='radio-lowToHigh'
            type='radio'
            onChange={() =>
              filterDispatch({
                type: "SORT_BY",
                payload: "lowToHigh",
              })
            }
            checked={filterState.sortBy === "lowToHigh"}
          />
          Price : Low to High
        </label>
        <label htmlFor='highToLow'>
          <input
            className='margin'
            id='highToLow'
            name='radio-highToLow'
            type='radio'
            onChange={() =>
              filterDispatch({
                type: "SORT_BY",
                payload: "highToLow",
              })
            }
            checked={filterState.sortBy === "highToLow"}
          />
          Price : High to Low
        </label>
        <label htmlFor='recommended'>
          <input
            className='margin'
            id='recommended'
            name='radio-recommended'
            type='radio'
            onChange={() =>
              filterDispatch({
                type: "SORT_BY",
                payload: "recommended",
              })
            }
            checked={filterState.sortBy === "recommended"}
          />
          Recommended
        </label>
        <label htmlFor='new'>
          <input
            className='margin'
            id='new'
            name='radio-new'
            type='radio'
            onChange={() =>
              filterDispatch({
                type: "SORT_BY",
                payload: "new",
              })
            }
            checked={filterState.sortBy === "new"}
          />
          What's New
        </label>
      </div>
    </>
  );
};

export { SideBar };
