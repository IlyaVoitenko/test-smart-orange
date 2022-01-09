import style from "./InfoItem.module.css";

const InfoItem = ({ nameBtn }) => {
  return (
    <li className={style.list}>
      <button className={style.btn} href="#">
        {nameBtn}
      </button>
    </li>
  );
};
export default InfoItem;
