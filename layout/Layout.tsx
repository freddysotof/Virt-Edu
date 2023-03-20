import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./dashboard.module.css";
import { SideBar } from "../components/SideBar";
import { NavBar } from "../components/Navbar";


export const Layout: NextPage = ({children}) => {
    
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
    <div className={styles.dashboard}>
       
       <SideBar/>
       <NavBar/>
       {children}
       
     </div>

    )
  }