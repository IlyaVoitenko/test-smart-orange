import React from "react";
import InfoItem from "./InfoItem";
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
          return <InfoItem nameBtn={link.name} />;
        })}
      </ul>
    </div>
  );
};
export default Info;
