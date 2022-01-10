import React from "react";
import HeaderItem from "../../Header/HeaderItem";
import style from "./Info.module.css";

const Info = () => {
  const links = [
    { id: 1, name: "ГЛАВНАЯ" },
    { id: 2, name: "ГАЛЕРЕЯ" },
    { id: 3, name: "ПРОЕКТЫ" },
    { id: 4, name: "СЕРИТФИКАТЫ" },
    { id: 5, name: "КОНТАКТЫ" },
  ];
  return (
    <div className={style.container}>
      <span>Информация</span>
      <ul>
        {links.map((link) => {
          return <HeaderItem nameBtn={link.name} style={style} />;
        })}
      </ul>
    </div>
  );
};
export default Info;
