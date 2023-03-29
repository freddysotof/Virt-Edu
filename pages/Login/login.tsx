import { useCallback, useEffect } from "react";
// import { TextField, Container } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./login.module.css";
import Logo from "../../components/Logo/logo";
import Btn_ayuda from "../../components/Containers/Buttons/btn_ayuda";
import Login_Container from "../../components/Containers/login_container";
import { NextPage } from "next";
import { useAuthStore, useCheckAuth } from "../../hooks";

export const  Login: NextPage= ({}) =>{
    //const router = useRouter();
  
    //const onRectangleButtonClick = useCallback(() => { router.push("/dashboard"); }, [router]);
    const 
    {
      status
    }=  useCheckAuth()
const router = useRouter();
    useEffect(() => {
        if(status==='authenticated')
          router.push('/Dashboard/Home');
    }, [status])
    

    return (
      <div className={styles.registerlogIn}>
        <Logo/>
        <Btn_ayuda/>
        <Login_Container   />
      </div>
    );
  };
  
  export default Login;