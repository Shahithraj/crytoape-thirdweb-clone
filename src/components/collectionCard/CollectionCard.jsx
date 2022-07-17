import React from "react";
import "./collectionCard.css";
import ethereum from "../../assets/eth.png";
import weth from "../../assets/weth.png";

const CollectionCard = ({ id, name, image, traits }) => {
  return (
    <div className="collectionCard">
    <div className="mainImg" >
      <img src={image} alt="" />
      </div>
      <div className="details">
        <div className="name">{name}</div>
        <div className="id">•#{id}</div>
      </div>
      <div className="priceContainer">
          <img src={weth} className="wethImage" alt="" />
          <div className="price">{traits[0]?.value}</div>
        </div>
    </div>
  );
};

export default CollectionCard;
