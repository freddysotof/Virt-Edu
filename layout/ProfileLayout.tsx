import type { NextPage } from "next";
import styles from "../pages/Dashboard/dashboard.module.css";
import { SideBar } from "../components/SideBar";


export const ProfileLayout: NextPage = ({children}) => {

  return (
    <div className={styles.dashboard}>
       
       <SideBar/>
       {children}
       
     </div>

    )
  }