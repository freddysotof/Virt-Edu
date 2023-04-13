import React from "react";

import styles from "../../assets/login.module.css"

function Btn_login({onClick}) {

  return (
    <>
      <button
        className={styles.rectangleButton}
        onClick={onClick}
      />
      <div className={styles.logIn1}>Log In</div>
    </>
  );
}

export default Btn_login;
