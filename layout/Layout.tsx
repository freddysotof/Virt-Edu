import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./dashboard.module.css";
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