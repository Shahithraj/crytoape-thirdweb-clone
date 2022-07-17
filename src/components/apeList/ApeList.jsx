import React from "react";
import CollectionCard from "../collectionCard/CollectionCard";
import "./apeList.css";

const ApeList = ({ collections, setSelectedApe }) => {
  return (
    <div className="apeList">
      {collections.map((nft,index) => (
        <div key={index} onClick={() =>setSelectedApe(index)}>
          <CollectionCard
            id={nft.token_id}
            name={nft.name}
            image={nft.image_original_url}
            traits={nft.traits}
          />
        </div>
      ))}
    </div>
  );
};

export default ApeList;
