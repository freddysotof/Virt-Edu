import React from "react";
import { useRouter } from "next/router";
import { useCallback } from "react";


import styles from "../../../../pages/Login/login.module.css"

function Btn_login({setIsLogged}) {

    const router = useRouter();

    // const onRectangleButtonClick = useCallback(() => { router.push("/dashboard"); }, [router]);
  const onClick = ()=>{
    setIsLogged(true)
  }
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
