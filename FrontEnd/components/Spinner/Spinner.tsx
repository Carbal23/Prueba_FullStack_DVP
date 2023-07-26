import React from "react";
import style from "./spinner.module.css"

const Spinner = (): JSX.Element => {
  return (
    <div className={style.spinner}>
      <div className={style.doublebounce1}></div>
      <div className={style.doublebounce2}></div>
    </div>
  );
};

export default Spinner