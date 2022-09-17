import React from "react";
import "./Card.css";

const Card = ({ product }) => {
  const { brand, category, price } = product;
  return (
    <div>
      <div className='parent-positioning card-container'>
        {/* <img src={image} alt={name}></img> */}
        <div className='inside-container '>
          <h3>{brand}</h3>

          <p>{category}</p>
          <div>{price}</div>
          {/* {isInFavourites === -1 ? ( */}
          <i
            className='fa fa-heart-o icon-btn icon-size icon-overlay'
            //   onClick={() => addToFavourites(data)}
          ></i>
          {/* ) : ( */}
          <i
            className='fa fa-heart icon-btn icon-size filled-icon-overlay'
            //   onClick={() => removeFromFavourites(id)}
          ></i>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export { Card };
