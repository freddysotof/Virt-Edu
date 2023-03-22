import type { NextPage } from "next";
import { Fragment, useCallback } from "react";
import styles from "../Schedule/SideBar_Schedule.module.css";
import Link from "next/link";

const SideBar_Schedule: NextPage = () => {

  return (
    <Fragment>
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup}>
        <div className={styles.frameChild} />

        <Link href="Dashboard/Home">
        <img className={styles.hogar1Icon} alt="" src="/Assets/svg/Highlighted_Schedule_Icon/hogar-1.svg" />
        </Link>

        <img className={styles.cursoOnline1Icon} alt="" src="/Assets/svg/Highlighted_Schedule_Icon/cursoonline-1.svg"/>

        <img className={styles.burbujaDeDialogo1Icon} alt="" src="/Assets/svg/Highlighted_Schedule_Icon/burbujadedialogo-1.svg"/>

        <img className={styles.calendario11} alt="" src="/Assets/svg/Highlighted_Schedule_Icon/calendario-1-1.svg" />

        <button>
        <Link href="/Grades/Grades">
        <img className={styles.examen1Icon} alt="" src="/Assets/svg/Highlighted_Schedule_Icon/examen-1.svg"/>
        </Link>
        </button>

        <div className={styles.vParent}>
          <h2 className={styles.v} id="ve">
            V
          </h2>
          <div className={styles.e}>E</div>
        </div>
        <img className={styles.logout1Icon} alt="" src="/Assets/svg/Highlighted_Schedule_Icon/logout-1.svg" />
      </div>

      <Link href="/Dashboard/Home">
      <img className={styles.hogar1Icon} alt="" src="/Assets/svg/Highlighted_Schedule_Icon/hogar-11.svg"/>
    </Link>

      <img className={styles.cursoOnline1Icon} alt="" src="/Assets/svg/Highlighted_Schedule_Icon/cursoonline-11.svg"/>
    
    {/* Actualizar href a page entero */}
    <Link href="/Chat/SideBar_Chat">
      <img className={styles.burbujaDeDialogo1Icon} alt="" src="/Assets/svg/Highlighted_Schedule_Icon/burbujadedialogo-1.svg" />
    </Link>

      <img className={styles.calendario11} alt="" src="/Assets/svg/Highlighted_Schedule_Icon/calendario-1-1.svg" />

      <Link href="/Grades/Grades">
      <img className={styles.examen1Icon} alt="" src="/Assets/svg/Highlighted_Schedule_Icon/examen-1.svg"/>
      </Link>

      <div className={styles.frameInner} />
      <div className={styles.vParent}>
        <h2 className={styles.v} id="ve">
          V
        </h2>
        <div className={styles.e}>E</div>
      </div>

      <img className={styles.logout1Icon} alt="" src="/Assets/svg/Highlighted_Schedule_Icon/logout-11.svg" />

    </div>
</Fragment>
  );
};

export default SideBar_Schedule;