import style from "./AboutCompany.module.css";
import ImagesAboutCompany from "./ImagesAboutCompany";
import DescriptionCompany from "./DescriptionCompany";
const AboutCompany = () => {
  return (
    <div className={style.container}>
      <ImagesAboutCompany />
      <DescriptionCompany />
    </div>
  );
};
export default AboutCompany;
