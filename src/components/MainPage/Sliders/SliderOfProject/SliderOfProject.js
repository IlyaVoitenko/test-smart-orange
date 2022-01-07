import React, { useRef } from "react";
import Slider from "react-slick";
import style from "./SliderOfProject.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderOfProject = () => {
  const customeSlider = useRef();
  const previous = () => {
    customeSlider.current.slickNext();
  };
  const next = () => {
    customeSlider.current.slickPrev();
  };
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const sliders = [
    {
      id: 1,
      urlImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIdnf8ymLyVAK_C_5khkpGAfhprJNT4Dy1g&usqp=CAU`,
    },
    {
      id: 2,
      urlImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtCQqYEICJE5fovq1fnYes4qhRLUu02MolQ&usqp=CAU`,
    },
  ];
  return (
    <div className={style.container}>
      <div>
        <button onClick={() => previous()}>&larr;</button>
        <button onClick={() => next()}>&rarr;</button>
        <span>1/{sliders.length}</span>
      </div>

      <div className={style.containerSlider}>
        <Slider {...settings} ref={customeSlider}>
          {sliders.map((slider) => {
            return (
              <div key={slider.id} className={style.slider}>
                <img src={slider.urlImg} alt="" className={style.img} />
                <button className={style.btnShowInfoSlider}>
                  Взглянуть &rarr;
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default SliderOfProject;
