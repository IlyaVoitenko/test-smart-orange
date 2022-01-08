import style from "./DescriptionCompany.module.css";

const DescriptionCompany = () => {
  return (
    <div className={style.containerContant}>
      <p>
        <h1 className={style.heading}>O КОМПАНИИ</h1>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </p>
      <button className={style.btnRead}>ЧИТАТЬ &nbsp; &rarr;</button>
    </div>
  );
};
export default DescriptionCompany;
