import React from "react";
import HeaderItem from "./HeaderItem";
import style from "./Header.module.css";
const Header = () => {
  const links = [
    { name: "ГЛАВНАЯ" },
    { name: "ГАЛЕРЕЯ" },
    { name: "ПРОЕКТЫ" },
    { name: "СЕРИТФИКАТЫ" },
    { name: "КОНТАКТЫ" },
  ];

  return (
    <div className={style.container}>
      <img
        className={style.icon}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOCBCDlL-9otzrVkBXUWdlqd1kbCo6HfttBg&usqp=CAU"
        alt=""
      />

      <ul>
        {links.map((item) => {
          return <HeaderItem nameBtn={item.name} />;
        })}
      </ul>
    </div>
  );
};
export default Header;
