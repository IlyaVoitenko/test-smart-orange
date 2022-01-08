import style from "./Image.module.css";

const Image = () => {
  return (
    <div className={style.container}>
      <img
        className={style.img}
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6fM9SaGg5HjMTkuzIM6JkC9Lxc20BLXOzTg&usqp=CAU"
      />
    </div>
  );
};
export default Image;
