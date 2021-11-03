import React from "react";
import "../css/landing-banner.scss";
import logo from "../img/Kankan-logo.png";
import basket from "../img/basket.png";

const LandingBanner = () => {
  return (
    <>
      <div className="sale-ends-tomorrow">
        <p>SALE ENDS TOMORROW</p>
      </div>
      <div className="rectangle">
        <ul className="navigation">
          <li>Shop</li>
          <li>Gift</li>
          <li>About</li>
        </ul>
        <div className="logo-container">
          <img className="logo" src={logo} alt="Kankan Logo" />
        </div>
        <div className="basket">
          <img src={basket} alt="check out" />
          <span style={{ paddingLeft: "10px" }}>Basket</span>
        </div>
      </div>
      <div className="splash-img">
        <div class="text-box">
          <h2>A gift for mum at Christmas</h2>
          <p>
            Luxurious soaps in a can. <br /> Give the world’s first plastic-free{" "}
            <br />
            refill to your very best.
          </p>
          <div className="button">
            <span>SHOP NOW</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingBanner;
