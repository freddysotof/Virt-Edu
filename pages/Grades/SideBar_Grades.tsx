import type { NextPage } from "next";
import { Fragment, useCallback } from "react";
import styles from "../Grades/SideBar_Grades.module.css";
import Link from "next/link";

const SideBar_Grades: NextPage = () => {
  
    return (
        <Fragment>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />

        <button className={styles.hogar1}>
        <Link href="/Dashboard/Home">
          <img className={styles.groupIcon} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group.svg" />
          </Link>
        </button>

        <button className={styles.cursoOnline1}>
          <img className={styles.vectorIcon} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector1.svg" />
          <img className={styles.vectorIcon2} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector2.svg" />
          <img className={styles.vectorIcon3} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector3.svg" />
          <img className={styles.vectorIcon4} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector4.svg" />
          <img className={styles.vectorIcon5} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector5.svg" />
          <img className={styles.vectorIcon6} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector6.svg" />
          <img className={styles.vectorIcon7} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector7.svg" />
          <img className={styles.vectorIcon8} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector8.svg" />
          <img className={styles.vectorIcon9} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector9.svg" />
          <img className={styles.vectorIcon10} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector10.svg" />
          <img className={styles.vectorIcon11} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector11.svg" />
          <img className={styles.vectorIcon12} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector12.svg" />
          <img className={styles.vectorIcon13} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector13.svg" />
        </button>

        {/* Actualizar href a page entero */}
        <Link href="/Chat/SideBar_Chat">
        <button className={styles.burbujaDeDialogo1}>
          <img className={styles.groupIcon1} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group1.svg" />
        </button>
        </Link>

        {/* Actualizar href a page entero */}
        <Link href="/Schedule/SideBar_Schedule">
        <button className={styles.calendario11}>
          <img className={styles.groupIcon2} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group2.svg" />
        </button>
        </Link>

        <button className={styles.examen1}>
          <img className={styles.groupIcon3} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group3.svg" />
          <img className={styles.groupIcon4} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group4.svg" />
          <img className={styles.groupIcon5} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group5.svg" />
          <img className={styles.groupIcon6} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group6.svg" />
          <img className={styles.groupIcon7} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group7.svg" />
          <img className={styles.groupIcon8} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group8.svg" />
          <img className={styles.groupIcon9} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group9.svg" />
          <img className={styles.groupIcon10} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group10.svg" />
          <img className={styles.groupIcon11} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group11.svg" />
          <img className={styles.groupIcon12} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group12.svg" />
          <img className={styles.groupIcon13} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group13.svg" />
          <img className={styles.groupIcon14} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group14.svg" />
        </button>

        <button className={styles.vParent}>
          <div className={styles.v}>V</div>
          <div className={styles.e}>E</div>
        </button>

        <button className={styles.logout1}>
          <img className={styles.vectorIcon14} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector14.svg" />
          <img className={styles.vectorIcon15} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector15.svg" />
          <img className={styles.vectorIcon16} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector16.svg" />
          <img className={styles.vectorIcon17} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector17.svg" />
          <img className={styles.vectorIcon18} alt="" src="/Assets/svg/Highlighted_Grades_Icon/vector18.svg" />
        </button>

        <div className={styles.frameItem} />
      </div>
      </Fragment>
    );
  };
  
  export default SideBar_Grades;