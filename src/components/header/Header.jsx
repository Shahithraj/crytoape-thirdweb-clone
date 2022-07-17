import React from "react";
import "./Header.css";
import apeLogo from "../../assets/header/apeLogo.png";
import searchIcon from "../../assets/header/search.png";
import themeSwitch from "../../assets/header/theme-switch.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo_container">
        <img src={apeLogo} alt="" className="apeLogo" />
      </div>
      <div className="searchBar">
        <div className="searchContainer">
          <img  src={searchIcon} alt="" />
        </div>
        <input
          type="search"
          placeholder="Search Collections, items or user"
          className="searchInput"
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitch} alt="" />
        </div>
      </div>
      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;
