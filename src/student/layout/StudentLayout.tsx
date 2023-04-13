
import { NavBar } from "../../components/NavBar";
import { SideBar } from "../../components/SideBar";
import styles from "../assets/css/dashboard.module.css";

export const StudentLayout = ({children}) => {

  return (
    <div className={styles.dashboard}>
       
       <SideBar/>
       <NavBar/>
       {children}
       
     </div>

    )
  }