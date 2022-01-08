import React from "react";
import style from "./SliderItem.module.css";

const SliderItem = ({ slider }) => {
  const { urlImg } = slider;
  return (
    <div className={style.slider}>
      <img src={urlImg} alt="" className={style.img} />
      <button className={style.btnShowInfoSlider}>Взглянуть &rarr;</button>
    </div>
  );
};
export default SliderItem;
