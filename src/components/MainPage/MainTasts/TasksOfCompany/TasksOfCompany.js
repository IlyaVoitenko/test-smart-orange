import style from "./TasksOfCompany.module.css";

const TasksOfCompany = () => {
  return (
    <div className={style.container}>
      <div className={style.description}>
        <div className={style.numberOfTask}>1</div>
        <div className={style.descriptionOfTask}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </div>
      </div>
      <div className={style.description}>
        <div className={style.numberOfTask}>2</div>
        <div className={style.descriptionOfTask}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </div>
      </div>
    </div>
  );
};
export default TasksOfCompany;
