import React from "react";
//import style from "./HeaderItem.module.css";

const HeaderItem = ({ nameBtn, style }) => {
  return (
    <li className={style.list}>
      <button className={style.btn} href="#">
        {nameBtn}
      </button>
    </li>
  );
};
export default HeaderItem;
