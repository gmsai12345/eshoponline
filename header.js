import React from "react";
import ReactDOM from "react-dom";
import "./header.css";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <div classname="header">
      <div className="header__logo">
        <StorefrontIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">e Shop</h2>
      </div>
      <div className="header_search">
        <SearchIcon className="header__searchIcon" />
        <input type="text" className="header__searchInput" />
      </div>
      <div className="header__nav">
        <div className="nav_i_tem">
          <span className="nav__itemLineOne"> hello guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav_item">
          <span className="nav__itemLineOne">Your </span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__item">
          <ShoppingBasketIcon
            className="itemBasket"
            fontSize="large"
          ></ShoppingBasketIcon>
          <span className="nav__itemLineTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<div>{Header()}</div>, document.getElementById("root"));

export default Header;
