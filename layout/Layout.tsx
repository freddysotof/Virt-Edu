import type { NextPage } from "next";
import styles from "../pages/Dashboard/dashboard.module.css";
import { SideBar } from "../components/SideBar";
import { NavBar } from "../components/NavBar";


export const Layout: NextPage = ({children}) => {

  return (
    <div className={styles.dashboard}>
       
       <SideBar/>
       <NavBar/>
       {children}
       
     </div>

    )
  }