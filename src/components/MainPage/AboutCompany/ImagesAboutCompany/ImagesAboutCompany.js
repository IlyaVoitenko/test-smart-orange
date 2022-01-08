import style from "./ImagesAboutCompany.module.css";

const ImagesAboutCompany = () => {
  return (
    <div className={style.containerImages}>
      <div className={style.two}>
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHKtiOoVNuoJrPAbeMKztKHcFMDO3Us-aig&usqp=CAU"
        />
        <img
          id={style.imgBottom}
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNmQZFtzWtwQrMD5ID7l9yJgqIVr6VWcwWQ&usqp=CAU"
        />
      </div>
      <div className={style.one}>
        <img
          id={style.longImg}
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXc0qzdMyBeb_PBFknpnv3wVlPlV3iq2QCg&usqp=CAU"
        />
      </div>
    </div>
  );
};
export default ImagesAboutCompany;
