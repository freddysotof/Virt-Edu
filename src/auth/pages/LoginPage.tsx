import { useCallback, useEffect } from "react";
import styles from "../assets/login.module.css";
import Logo from "../components/Logo/logo";
import Btn_ayuda from "../components/Buttons/btn_ayuda";
import Login_Container from "../components/login_container";
import { LoginLayout } from "../layout/LoginLayout";
import { useLocation } from "react-router-dom";

export const  LoginPage = ({}) =>{

    return (
      <LoginLayout>
        <Logo/>
      
        <Login_Container   />
      </LoginLayout>
    );
  };
  