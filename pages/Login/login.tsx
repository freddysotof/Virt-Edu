import { useCallback } from "react";
// import { TextField, Container } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./login.module.css";
import Logo from "../../components/Logo/logo";
import Btn_ayuda from "../../components/Containers/Buttons/Btn_Ayuda/btn_ayuda";
import Login_Container from "../../components/Containers/login_container";

function LogIn () {
    //const router = useRouter();
  
    //const onRectangleButtonClick = useCallback(() => { router.push("/dashboard"); }, [router]);
  
    return (
      <div className={styles.registerlogIn}>
        <Logo/>
        <Btn_ayuda/>
        <Login_Container/>
      </div>
    );
  };
  
  export default LogIn;