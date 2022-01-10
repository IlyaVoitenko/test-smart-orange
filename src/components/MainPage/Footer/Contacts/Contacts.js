import React from "react";
import style from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={style.container}>
      <p>Контакты</p>
      <p>
        <img
          className={style.iconContact}
          src="https://img.icons8.com/ios/32/000000/point-of-interest.png"
          alt=""
        />
        &nbsp; 100000, Руспублика Казахстан, г.Караганда, ул. Телевизионная 10
      </p>
      <p>
        <img src="https://img.icons8.com/small/32/000000/phone.png" alt="" />
        &nbsp; +38(000) 000 00 00{" "}
      </p>
      <p>
        <img src="https://img.icons8.com/small/32/000000/new-post.png" alt="" />
        &nbsp; main@gmail.com
      </p>
    </div>
  );
};
export default Contacts;
