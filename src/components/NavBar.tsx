import { useEffect, useState } from "react";
import styles from "../assets/css/navbar.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../hooks";

export const NavBar = () => {
  
  const [pageName, setpageName] = useState("");
 

  const location = useLocation();
  
  const {
    displayName,
    username,
    email
  }= useAuthStore()
  useEffect(() => {
    if (location.pathname === "/")
      setpageName('Dashboard')
      else if(location.pathname==='/Courses')
      setpageName('Courses')
    else if(location.pathname==='/Messages')
      setpageName('Messages')
    else if(location.pathname==='/Schedule')
      setpageName('Schedule')
    else if(location.pathname==='/Grades')
      setpageName('Grades')
  
  }, [location.pathname]);

  return (
    <div>
      <div className={styles.dashboard1}>{pageName}</div>
      <NavLink to={"/Profile"}>
      <img className={styles.dashboardChild} alt="" src="/Assets/images/ellipse-2@2x.png"/>
      </NavLink>
      <div className={styles.luisaPerez}>Luisa Perez</div>
      <div className={styles.student}>Student</div>
      <button className={styles.notificacion1}>
        <img className={styles.groupIcon15} alt="" src="/Assets/svg/group15.svg"/>
        <img className={styles.notificacion1Child} alt="" src="/Assets/svg/ellipse-3.svg"/>
        <div className={styles.div}>4</div>
      </button>
    </div>
  );
};
