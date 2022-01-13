import React from "react";
import LogoCompany from "./LogoCompany";
import Info from "./Info";
import Contacts from "./Contacts";
import SocialNetworks from "./SocialNetworks";
import LawOfProject from "./LawOfProject";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <LogoCompany />
      <Info />
      <Contacts />
      <SocialNetworks />
      <LawOfProject />
    </div>
  );
};
export default Footer;
