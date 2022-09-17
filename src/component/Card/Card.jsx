import { useState } from "react";
import "./Card.css";

import { useNavigate } from "react-router-dom";
import { DetailsPage } from "../../pages/DetailsPage/DetailsPage";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const { brand, category, price } = product;

  const [navigateToDetailsPage, setNavigateToDetailsPage] = useState(false);

  return (
    <div
      onClick={() => {
        setNavigateToDetailsPage(true);
        navigate("/productDetailsPage");
      }}
    >
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
        {navigateToDetailsPage && <DetailsPage product={product} />}
      </div>
    </div>
  );
};

export { Card };
