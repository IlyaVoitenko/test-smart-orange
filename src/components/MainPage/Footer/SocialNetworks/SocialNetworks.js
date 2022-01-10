import React from "react";
import style from "./SocialNetworks.module.css";
import NetworkItem from "./NetworkItem";

const SocialNetworks = () => {
  const networks = [
    {
      url: "https://www.facebook.com/",
      icon: "https://img.icons8.com/ios/64/000000/facebook--v1.png",
    },
    {
      url: "https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      icon: "https://img.icons8.com/ios/64/000000/twitter--v1.png",
    },
    {
      url: "https://www.linkedin.com/feed/",
      icon: "https://img.icons8.com/small/64/000000/linkedin.png",
    },
    {
      url: "https://www.pinterest.com/",
      icon: "https://img.icons8.com/small/64/000000/pinterest.png",
    },
  ];
  return (
    <div className={style.container}>
      <span>Cоциальные сети</span>
      <ul className={style.ulNetworks}>
        {networks.map((network) => {
          return <NetworkItem url={network.url} icon={network.icon} />;
        })}
      </ul>
    </div>
  );
};
export default SocialNetworks;
