import React from "react";
import style from "./ContactUs.module.css";
import Title from "./Title";
import FormForClient from "./ContactForm";
import Image from "./Image";

const ContactUs = () => {
  return (
    <div>
      <Title />
      <div className={style.container}>
        <FormForClient />
        <Image />
      </div>
    </div>
  );
};
export default ContactUs;
