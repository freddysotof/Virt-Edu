
import { Fragment } from "react";
import styles from "../student/assets/css/dashboard.module.css"
import { useAuthStore } from "../hooks";
import { NavLink, useLocation } from "react-router-dom";


export const SideBar = () => {


  const location = useLocation();
  const {
    startLogout
  } = useAuthStore();

  const onClickLogout = async () => {
    await startLogout();
  }
  return (
    <Fragment>
      <div className={styles.rectangleParent}>

        {/* Linea/divisor naranja */}
        <div className={styles.frameChild} />


        <NavLink to={"/"}>
          {location.pathname === "/" 
            ?
            (
              <>
                <div className={styles.frameItemHome} />
                <button className={styles.hogar1}>
                  <img className={styles.groupIcon} alt="" src="/Assets/svg/group.svg" />
                </button>
              </>
            ) : (
              <button className={styles.hogar1}>
                <img className={styles.groupIcon} alt="" src="/Assets/svg/Highlighted_Grades_Icon/group.svg" />
              </button>
            )}
        </NavLink>

        <NavLink to={"/Courses"}>
          {location.pathname === "/Courses" ? (
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
        </NavLink>

        <NavLink to={"/Messages"}>
          {location.pathname === "/Messages" ? (
            <>
              <div className={styles.frameItemChat} />
              <button className={styles.burbujaDeDialogo1}>
                <img className={styles.burbujaDeDialogo1Icon} alt="" src="/Assets/svg/Highlighted_Chat_Icon/burbujadedialogo-1.svg" />
              </button>
            </>
          ) : (
            <button className={styles.burbujaDeDialogo1}>
              <img className={styles.groupIcon1} alt="" src="/Assets/svg/group1.svg" />
            </button>
          )}
        </NavLink>

        <NavLink to={"/Schedule"}>
          {location.pathname === "/Schedule" ? (
            <>
              <div className={styles.frameItemSchedule} />
              <button className={styles.calendario11}>
                <img className={styles.calendario11Icon} alt="" src="/Assets/svg/Highlighted_Schedule_Icon/calendario-1-1.svg" />
              </button>
            </>
          ) : (
            <button className={styles.calendario11}>
              <img className={styles.groupIcon2} alt="" src="/Assets/svg/group2.svg" />
            </button>
          )}
        </NavLink>

        <NavLink to={"/Grades"}>
          {location.pathname === "/Grades" ? (
            <>
              <div className={styles.frameItemGrades} />
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
            </>
          ) : (
            <button className={styles.examen1}>
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
          )}
        </NavLink>

        {/* <NavLink to={"/Profile/Profile">
            {location.pathname === "/Profile/Profile" ? (
              <>
              
              </>
            ) : (

            )}
          </NavLink> */}

        <button className={styles.vParent}>
          <div className={styles.v}>V</div>
          <div className={styles.e}>E</div>
        </button>

        <button className={styles.logout1} onClick={onClickLogout}>
          <img className={styles.vectorIcon14} alt="" src="/Assets/svg/vector14.svg" />
          <img className={styles.vectorIcon15} alt="" src="/Assets/svg/vector15.svg" />
          <img className={styles.vectorIcon16} alt="" src="/Assets/svg/vector16.svg" />
          <img className={styles.vectorIcon17} alt="" src="/Assets/svg/vector17.svg" />
          <img className={styles.vectorIcon18} alt="" src="/Assets/svg/vector18.svg" />
        </button>

      </div>
    </Fragment>
  );
};
