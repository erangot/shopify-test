import React from "react";
import "../css/landing-banner.scss";

const LandingBanner = () => {
  return (
    <>
      <div className="sale-ends-tomorrow"></div>
      <div className="rectangle">
        <ul className="navigation">
          <li>Shop</li>
          <li>Gift</li>
          <li>About</li>
        </ul>
      </div>
    </>
  );
};

export default LandingBanner;
