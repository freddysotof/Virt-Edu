
import styles from "../assets/css/profile.module.css";
import { SideBar } from "../components/SideBar";

export const ProfileLayout = ({children}) => {

  return (
    <div className={styles.dashboard}>
       
       <SideBar/>
       {children}
       
     </div>

    )
  }