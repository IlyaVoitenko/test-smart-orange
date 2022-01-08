import React from "react";
import style from "./NavigateSliders.module.css";
const NavigateSliders = ({ next, previous }) => {
  return (
    <div className={style.contaniner}>
      <button className={style.btnNext} onClick={() => next()}>
        &larr;
      </button>
      <button className={style.btnPrevious} onClick={() => previous()}>
        &rarr;
      </button>
    </div>
  );
};
export default NavigateSliders;
