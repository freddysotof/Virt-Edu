import React from 'react'
import { Container } from "@mui/material";
import User from './Textfields/user'
import Password from './Textfields/password'
import Btn_login from './Buttons/Btn_Login/btn_login';

import styles from "../../pages/Login/login.module.css"

function Login_Container() {
  return (
    <Container maxwidth="sm" className={styles.component1frame2}>

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

          <Btn_login/>
          <User/>
          <Password/>
        </Container>
  )
}

export default Login_Container