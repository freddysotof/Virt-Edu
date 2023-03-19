import React from "react";
import { useRouter } from "next/router";
import { useCallback } from "react";

import styles from "../../../pages/Login/login.module.css"

function Btn_ayuda() {
  const router = useRouter();

  const onEllipseButtonClick = useCallback(() => { router.push("/dashboard"); }, [router]);

  return (
    <button className={styles.ellipseParent} onClick={onEllipseButtonClick}>
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
  );
}

export default Btn_ayuda;
