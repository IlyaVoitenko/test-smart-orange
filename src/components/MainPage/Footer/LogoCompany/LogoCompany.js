import React from "react";
import style from "./LogoCompany.module.css";

const LogoCompany = () => {
  return (
    <div className={style.container}>
      <img
        className={style.logoImg}
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOCBCDlL-9otzrVkBXUWdlqd1kbCo6HfttBg&usqp=CAU"
      />
    </div>
  );
};
export default LogoCompany;
