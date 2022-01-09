import style from "./NetworkItem.module.css";

const NetworkItem = ({ url, icon }) => {
  return (
    <li className={style.liNetwork}>
      <a href={url}>
        <img src={icon} alt="" className={style.networkIcon} />
      </a>
    </li>
  );
};
export default NetworkItem;
