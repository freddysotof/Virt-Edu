import type { NextPage } from "next";
import { Fragment, useCallback } from "react";
import styles from "../Chat/SideBar_Chat.module.css";
import Link from "next/link";

const FrameComponent: NextPage = () => {

  return (
    <Fragment>
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
    <Link href="/Dashboard/Home">
      <img className={styles.hogar1Icon} alt="" src="/Assets/svg/Highlighted_Chat_Icon/hogar-1.svg"/>
      </Link>

      <img className={styles.cursoOnline1Icon} alt="" src="/Assets/svg/Highlighted_Chat_Icon/cursoonline-1.svg"/>

{/* Actualizar href a page entero */}
      <Link href="/Chat/SideBar_Chat">
      <img className={styles.burbujaDeDialogo1Icon} alt="" src="/Assets/svg/Highlighted_Chat_Icon/burbujadedialogo-1.svg"/>
        </Link>

    {/* Actualizar href a page entero */}
        <Link href="/Schedule/SideBar_Schedule">  
      <img className={styles.calendario11} alt="" src="/Assets/svg/Highlighted_Chat_Icon/calendario-1-1.svg"/>
        </Link>

    <Link href="/Grades/Grades">
      <img className={styles.examen1Icon} alt="" src="/Assets/svg/Highlighted_Chat_Icon/examen-1.svg"/>
      </Link>

      <div className={styles.vParent}>
        <button className={styles.v}>V</button>
        <div className={styles.e}>E</div>
      </div>

      <img className={styles.logout1Icon} alt="" src="/Assets/svg/Highlighted_Chat_Icon/logout-1.svg" />

      <div className={styles.frameItem} />
    </div>
    </Fragment>
  );
};

export default FrameComponent;