import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./dashboard.module.css";

export const NavBar: NextPage = () => {
  return (
    <div>
      <div className={styles.dashboard1}>Dashboard</div>
      <img
        className={styles.dashboardChild}
        alt=""
        src="/Assets/images/ellipse-2@2x.png"
      />
      <div className={styles.luisaPerez}>Luisa Perez</div>
      <div className={styles.student}>Student</div>
      <button className={styles.notificacion1}>
        <img
          className={styles.groupIcon15}
          alt=""
          src="/Assets/svg/group15.svg"
        />
        <img
          className={styles.notificacion1Child}
          alt=""
          src="/Assets/svg/ellipse-3.svg"
        />
        <div className={styles.div}>4</div>
      </button>
    </div>
  );
};
