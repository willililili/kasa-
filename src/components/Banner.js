import React from "react";
import "./Banner.scss";

const Banner = ({ page, text }) => {
  return (
      <div className={`banner ${page}`}>
          <h1 className="banner-h1">{text}</h1>
      </div>
  );
};

export default Banner;