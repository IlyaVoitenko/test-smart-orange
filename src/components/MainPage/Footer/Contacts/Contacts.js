import React from "react";
import style from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={style.container}>
      <p>Контакты</p>
      <p> 100000, Руспублика Казахстан, г.Караганда, ул. Телевизионная 10</p>
      <p>&#9990; +38(000) 000 00 00 </p>
      <p>&#128386; main@gmail.com</p>
    </div>
  );
};
export default Contacts;
