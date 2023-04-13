import styles from "../assets/login.module.css";
import Btn_ayuda from "../components/Buttons/btn_ayuda";
export const LoginLayout = ({children}) => {
  return (
    <div className={styles.registerlogIn}>
       <Btn_ayuda/>
        {children}
       
      </div>
  )
}
