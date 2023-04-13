import React from "react";
import { useCallback } from "react";
import styles from "../../assets/login.module.css"
import { NavLink } from "react-router-dom";

function Btn_ayuda() {


  return (
    <NavLink to={'/help'}>
    <button className={styles.ellipseParent}>
      <img
        className={styles.groupChild}
        alt=""
        src="/Assets/svg/ellipse-1.svg"
      />
      <img
        className={styles.pregunta1Icon}
        alt=""
        src="/Assets/svg/pregunta-1.svg"
      />
    </button>
    </NavLink>
  );
}

export default Btn_ayuda;
