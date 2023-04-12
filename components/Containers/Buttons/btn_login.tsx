import React from "react";
import { useRouter } from "next/router";

import styles from "../../../pages/Login/login.module.css"
import { useAuthStore } from "../../../hooks";

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
