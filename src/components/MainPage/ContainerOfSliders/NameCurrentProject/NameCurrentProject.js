import React from "react";
import style from "./NameCurrentProject.module.css";
const NameCurrentProject = ({ nameOfProject }) => {
  return <div className={style.nameOfProject}>{nameOfProject}</div>;
};
export default NameCurrentProject;
