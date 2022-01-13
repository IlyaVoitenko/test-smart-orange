import React from "react";
import Title from "./Title";
import ExamplesOfProjects from "./ExamplesOfProjects";
import style from "./OurProjects.module.css";
const OurProjects = () => {
  return (
    <div className={style.containerProjects}>
      <Title />
      <ExamplesOfProjects />
    </div>
  );
};
export default OurProjects;
