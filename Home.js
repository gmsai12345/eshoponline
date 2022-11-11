import React from "react";
import ReactDOM from "react-dom";
import "./home.css";
import Product from "./product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
          alt=""
          className="home_image"
        />
        <div className="home_row">
          <Product />
          <Product />
          <div className="home_row">
            <Product />
            <Product />
            <Product />
            <div className="home_row">
              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<div>{Home()}</div>, document.getElementById("root"));
export default Home;
// create rows after image
