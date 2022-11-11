import "./product.css";
import React from "react";
import ReactDOM from "react-dom";
//import StarIcon from "@mui/icons-material/Star";
//import StarHalfIcon from "@mui/icons-material/StarHalf";
//import StarBorderIcon from "@mui/icons-material/StarBorder";

function Product() {
  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p> Title</p>
          {"\n"}
          <p className="product_prize">$30</p>
          {"\n"}
          <p className="product_rating"> </p>
          <img
            src="https://m.media-amazon.com/images/I/81lMCXL5tOL._AC_UL480_FMwebp_QL65_.jpg"
            alt=""
            className=""
          />
          <button>add to basket</button>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<div>{Product()}</div>, document.getElementById("root"));
export default Product;
