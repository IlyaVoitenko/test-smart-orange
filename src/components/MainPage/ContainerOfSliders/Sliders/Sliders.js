import React, { useRef, useState } from "react";
import Slider from "react-slick";
import style from "./Sliders.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "../SliderItem";
import NavigateSliders from "../NavigateSliders";
import AmountSliders from "../AmountSliders";
import NameCurrentProject from "../NameCurrentProject";
const Sliders = () => {
  const customeSlider = useRef();
  const previousSlider = () => {
    customeSlider.current.slickNext();
  };
  const nextSlider = () => {
    customeSlider.current.slickPrev();
  };
  const sliders = [
    {
      id: 1,
      urlImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIdnf8ymLyVAK_C_5khkpGAfhprJNT4Dy1g&usqp=CAU`,
      name: "Part of New York",
    },
    {
      id: 2,
      urlImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtCQqYEICJE5fovq1fnYes4qhRLUu02MolQ&usqp=CAU`,
      name: "Office",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(1);
  const [nameCurrentProject, setNameCurrentProject] = useState(sliders[0].name);
  const [amountSlides] = useState(sliders.length);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => {
      setNameCurrentProject(sliders[current].name);
      setCurrentSlide(current + 1);
    },
  };

  return (
    <div className={style.container}>
      <div className={style.InfoAboutSlider}>
        <NameCurrentProject nameOfProject={nameCurrentProject} />
        <NavigateSliders next={nextSlider} previous={previousSlider} />
        <AmountSliders
          currentSlide={currentSlide}
          amountSlides={amountSlides}
        />
      </div>
      <div className={style.containerSlider}>
        <Slider {...settings} ref={customeSlider}>
          {sliders.map((slider) => {
            return <SliderItem key={slider.id} slider={slider} />;
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Sliders;
