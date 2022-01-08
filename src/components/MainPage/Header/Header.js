import React from "react";
import HeaderItem from "./HeaderItem";
import style from "./Header.module.css";
const Header = () => {
  const links = [
    { id: 1, name: "ГЛАВНАЯ" },
    { id: 2, name: "ГАЛЕРЕЯ" },
    { id: 3, name: "ПРОЕКТЫ" },
    { id: 4, name: "СЕРИТФИКАТЫ" },
    { id: 5, name: "КОНТАКТЫ" },
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
          return <HeaderItem key={item.id} nameBtn={item.name} />;
        })}
      </ul>
    </div>
  );
};
export default Header;
