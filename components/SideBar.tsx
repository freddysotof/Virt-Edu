import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./dashboard.module.css";

export const SideBar: NextPage = () => {
    const onCursoOnline1Click = useCallback(() => {
        // Please sync "Courses" to the project
      }, []);
    
      const onBurbujaDeDialogo1Click = useCallback(() => {
        // Please sync "Messages" to the project
      }, []);
    
      const onCalendario11Click = useCallback(() => {
        // Please sync "Schedule" to the project
      }, []);
    
      const onExamen1Click = useCallback(() => {
        // Please sync "Grades" to the project
      }, []);

    return (
    <div className={styles.rectangleParent}>
    <div className={styles.frameChild} />
    <button className={styles.hogar1}>
      <img className={styles.groupIcon} alt="" src="/Assets/svg/group.svg" />
    </button>
    <button className={styles.cursoOnline1} onClick={onCursoOnline1Click}>
      <img className={styles.vectorIcon} alt="" src="/Assets/svg/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/Assets/svg/vector1.svg" />
      <img className={styles.vectorIcon2} alt="" src="/Assets/svg/vector2.svg" />
      <img className={styles.vectorIcon3} alt="" src="/Assets/svg/vector3.svg" />
      <img className={styles.vectorIcon4} alt="" src="/Assets/svg/vector4.svg" />
      <img className={styles.vectorIcon5} alt="" src="/Assets/svg/vector5.svg" />
      <img className={styles.vectorIcon6} alt="" src="/Assets/svg/vector6.svg" />
      <img className={styles.vectorIcon7} alt="" src="/Assets/svg/vector7.svg" />
      <img className={styles.vectorIcon8} alt="" src="/Assets/svg/vector8.svg" />
      <img className={styles.vectorIcon9} alt="" src="/Assets/svg/vector9.svg" />
      <img className={styles.vectorIcon10} alt="" src="/Assets/svg/vector10.svg" />
      <img className={styles.vectorIcon11} alt="" src="/Assets/svg/vector11.svg" />
      <img className={styles.vectorIcon12} alt="" src="/Assets/svg/vector12.svg" />
      <img className={styles.vectorIcon13} alt="" src="/Assets/svg/vector13.svg" />
    </button>
    <button
      className={styles.burbujaDeDialogo1}
      onClick={onBurbujaDeDialogo1Click}
    >
      <img className={styles.groupIcon1} alt="" src="/Assets/svg/group1.svg" />
    </button>
    <button className={styles.calendario11} onClick={onCalendario11Click}>
      <img className={styles.groupIcon2} alt="" src="/Assets/svg/group2.svg" />
    </button>
    <button className={styles.examen1} onClick={onExamen1Click}>
      <img className={styles.groupIcon3} alt="" src="/Assets/svg/group3.svg" />
      <img className={styles.groupIcon4} alt="" src="/Assets/svg/group4.svg" />
      <img className={styles.groupIcon5} alt="" src="/Assets/svg/group5.svg" />
      <img className={styles.groupIcon6} alt="" src="/Assets/svg/group6.svg" />
      <img className={styles.groupIcon7} alt="" src="/Assets/svg/group7.svg" />
      <img className={styles.groupIcon8} alt="" src="/Assets/svg/group8.svg" />
      <img className={styles.groupIcon9} alt="" src="/Assets/svg/group9.svg" />
      <img className={styles.groupIcon10} alt="" src="/Assets/svg/group10.svg" />
      <img className={styles.groupIcon11} alt="" src="/Assets/svg/group11.svg" />
      <img className={styles.groupIcon12} alt="" src="/Assets/svg/group12.svg" />
      <img className={styles.groupIcon13} alt="" src="/Assets/svg/group13.svg" />
      <img className={styles.groupIcon14} alt="" src="/Assets/svg/group14.svg" />
    </button>
    <button className={styles.vParent}>
      <div className={styles.v}>V</div>
      <div className={styles.e}>E</div>
    </button>
    <button className={styles.logout1}>
      <img className={styles.vectorIcon14} alt="" src="/Assets/svg/vector14.svg" />
      <img className={styles.vectorIcon15} alt="" src="/Assets/svg/vector15.svg" />
      <img className={styles.vectorIcon16} alt="" src="/Assets/svg/vector16.svg" />
      <img className={styles.vectorIcon17} alt="" src="/Assets/svg/vector17.svg" />
      <img className={styles.vectorIcon18} alt="" src="/Assets/svg/vector18.svg" />
    </button>
    <div className={styles.frameItem} />
  </div>
    )
}