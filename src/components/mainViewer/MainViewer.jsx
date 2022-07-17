import React, { useState, useEffect } from "react";
import "./mainViewer.css";
import instagramLogo from "../../assets/owner/instagram.png";
import twitterLogo from "../../assets/owner/twitter.png";
import moreLogo from "../../assets/owner/more.png";

const MainViewer = ({ collections, selectedApe }) => {
  const [activeApe, setActiveApe] = useState(collections[selectedApe]);

  useEffect(() => {
    setActiveApe(collections[selectedApe]);
  }, [collections, selectedApe]);

  console.log(activeApe);

  return (
    <div className="mainViewer">
      <div className="mainContent">
        <div className="apeHighlight">
          <div className="apeContainer">
            <img src={activeApe.image_original_url} alt="" className="selectedApe"/>
          </div>
        </div>

        <div className="apeDetails" style={{ color: "white" }}>
          <div className="apeTitle">
            <span>{activeApe.name}</span>
            <span className="itemNumber">#{activeApe.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activeApe.owner.profile_img_url} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activeApe.owner.address}</div>
                <div className="ownerHandle">@shahith</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainViewer;
