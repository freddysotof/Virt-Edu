import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import { useRouter } from "next/router";

export const NavBar = () => {
  const router = useRouter();
  const [pageName, setpageName] = useState("");
 
  useEffect(() => {
    if (router.pathname === "/" || router.pathname === "/Dashboard/Home")
      setpageName('Dashboard')
      else if(router.pathname==='/Courses/Courses')
      setpageName('Courses')
    else if(router.pathname==='/Messages/Messages')
      setpageName('Messages')
    else if(router.pathname==='/Schedule/Schedule')
      setpageName('Schedule')
    else if(router.pathname==='/Grades/Grades')
      setpageName('Grades')
  
  }, [router.pathname]);

  return (
    <div>
      <div className={styles.dashboard1}>{pageName}</div>
      <img className={styles.dashboardChild} alt="" src="/Assets/images/ellipse-2@2x.png"/>
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
