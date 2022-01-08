import React from "react";
import style from "./AmountSliders.module.css";
const AmountSliders = ({ currentSlide, amountSlides }) => {
  return (
    <p className={style.infoAboutSliders}>
      {currentSlide}&ensp;/&ensp;{amountSlides}
    </p>
  );
};
export default AmountSliders;
