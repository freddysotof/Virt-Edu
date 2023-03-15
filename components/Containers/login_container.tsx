import React from "react";
import { Container } from "@mui/material";
import User from "./Textfields/user";
import Password from "./Textfields/password";
import Btn_login from "./Buttons/Btn_Login/btn_login";
import { sizing } from "@mui/system";

import styles from "../../pages/Login/login.module.css";

function Login_Container({setIsLogged}) {
  return (
    <React.Fragment>
      <Container maxWidth="md" className={styles.component1frame2}>
        <div className={styles.component1frame2Child} />

        <h1 className={styles.logIn} id="Log In">
          Log In
        </h1>

        <img
          className={styles.component1frame2Item}
          alt=""
          src="/Assets/images/line-1@2x.png"
        />

        <img
          className={styles.component1frame2Inner}
          alt=""
          src="/Assets/images/line-2@2x.png"
        />

        <a className={styles.forgotPassword} href="">
          Forgot password?
        </a>

        <Btn_login  setIsLogged={setIsLogged} />
        <User />
        <Password />
      </Container>
    </React.Fragment>
  );
}

export default Login_Container;
