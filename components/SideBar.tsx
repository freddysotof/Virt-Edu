import type { NextPage } from "next";
import { Fragment } from "react";
import styles from "../pages/Dashboard/dashboard.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export const SideBar: NextPage = () => {
  const router = useRouter();
  return (
    <Fragment>
      <div className={styles.rectangleParent}>
        
        {/* Linea/divisor naranja */}
        <div className={styles.frameChild} />


        <Link href="/Dashboard/Home">
        {router.pathname === "/" ||
            router.pathname === "/Dashboard/Home" 
            ?
          (
              <>
              <div className={styles.frameItemHome}/>
              <button className={styles.hogar1}>
                <img className={styles.groupIcon} alt="" src="/Assets/svg/group.svg"/>
              </button>
              </>
          ) : (
              <button className={styles.hogar1}>
                <img className={styles.groupIcon} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group.svg"/>
              </button>
            )}
        </Link>
        
        <Link href="/Courses/Courses">
          {router.pathname === "/Courses/Courses" ? (
            <>
            <div className={styles.frameItemCourses} />
            <button className={styles.cursoOnline1}>
              <img className={styles.cursoOnline1Icon} alt="" src="/Assets/svg/Highlighted_Courses_Icon/cursoonline-1.svg" />
            </button>
            </>
          ) : (
        <button className={styles.cursoOnline1}>
          <img className={styles.cursoOnline1Icon} alt="" src="/Assets/svg/Highlighted_Chat_Icon/cursoonline-1.svg" />
        </button>
          )}
        </Link>

        <Link href="/Messages/Messages">
          {router.pathname === "/Messages/Messages" ? (
            <>
            <div className={styles.frameItemChat} />
          <button className={styles.burbujaDeDialogo1}>
            <img className={styles.burbujaDeDialogo1Icon} alt="" src="/Assets/svg/Highlighted_Chat_Icon/burbujadedialogo-1.svg"/>
          </button>
            </>
          ) : (
          <button className={styles.burbujaDeDialogo1}>
            <img className={styles.groupIcon1} alt="" src="/Assets/svg/group1.svg"/>
          </button>
          )}
        </Link>

        <Link href="/Schedule/Schedule">
          {router.pathname === "/Schedule/Schedule" ? (
            <>
            <div className={styles.frameItemSchedule} />
            <button className={styles.calendario11}>
              <img className={styles.calendario11Icon} alt="" src="/Assets/svg/Highlighted_Schedule_Icon/calendario-1-1.svg" />
            </button>
            </>
          ) : (
          <button className={styles.calendario11}>
            <img className={styles.groupIcon2} alt="" src="/Assets/svg/group2.svg"/>
          </button>
            )}
        </Link>

        <Link href="/Grades/Grades">
          {router.pathname === "/Grades/Grades" ? (
            <>
              <div className={styles.frameItemGrades} />
              <button className={styles.examen1}>
                <img className={styles.groupIcon3} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group3.svg"/>
                <img className={styles.groupIcon4} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group4.svg"/>
                <img className={styles.groupIcon5} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group5.svg"/>
                <img className={styles.groupIcon6} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group6.svg"/>
                <img className={styles.groupIcon7} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group7.svg"/>
                <img className={styles.groupIcon8} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group8.svg"/>
                <img className={styles.groupIcon9} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group9.svg"/>
                <img className={styles.groupIcon10} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group10.svg"/>
                <img className={styles.groupIcon11} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group11.svg"/>
                <img className={styles.groupIcon12} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group12.svg"/>
                <img className={styles.groupIcon13} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group13.svg"/>
                <img className={styles.groupIcon14} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group14.svg"/>
              </button>
            </>
          ) : (
            <button className={styles.examen1}>
              <img className={styles.groupIcon3} alt="" src="/Assets/svg/group3.svg"/>
              <img className={styles.groupIcon4} alt="" src="/Assets/svg/group4.svg"/>
              <img className={styles.groupIcon5} alt="" src="/Assets/svg/group5.svg"/>
              <img className={styles.groupIcon6} alt="" src="/Assets/svg/group6.svg"/>
              <img className={styles.groupIcon7} alt="" src="/Assets/svg/group7.svg"/>
              <img className={styles.groupIcon8} alt="" src="/Assets/svg/group8.svg"/>
              <img className={styles.groupIcon9} alt="" src="/Assets/svg/group9.svg"/>
              <img className={styles.groupIcon10} alt="" src="/Assets/svg/group10.svg"/>
              <img className={styles.groupIcon11} alt="" src="/Assets/svg/group11.svg"/>
              <img className={styles.groupIcon12} alt="" src="/Assets/svg/group12.svg"/>
              <img className={styles.groupIcon13} alt="" src="/Assets/svg/group13.svg"/>
              <img className={styles.groupIcon14} alt="" src="/Assets/svg/group14.svg"/>
            </button>
          )}
        </Link>

        <button className={styles.vParent}>
          <div className={styles.v}>V</div>
          <div className={styles.e}>E</div>
        </button>

        <button className={styles.logout1}>
          <img className={styles.vectorIcon14} alt="" src="/Assets/svg/vector14.svg"/>
          <img className={styles.vectorIcon15} alt="" src="/Assets/svg/vector15.svg"/>
          <img className={styles.vectorIcon16} alt="" src="/Assets/svg/vector16.svg"/>
          <img className={styles.vectorIcon17} alt="" src="/Assets/svg/vector17.svg"/>
          <img className={styles.vectorIcon18} alt="" src="/Assets/svg/vector18.svg"/>
        </button>

      </div>
    </Fragment>
  );
};
