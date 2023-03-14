import React from "react";
import { useRouter } from "next/router";
import { useCallback } from "react";


import styles from "../../../../pages/Login/login.module.css"

function Btn_login() {

    const router = useRouter();

    const onRectangleButtonClick = useCallback(() => { router.push("/dashboard"); }, [router]);

  return (
    <>
      <button
        className={styles.rectangleButton}
        onClick={onRectangleButtonClick}
      />
      <div className={styles.logIn1}>Log In</div>
    </>
  );
}

export default Btn_login;
