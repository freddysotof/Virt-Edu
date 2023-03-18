import React from 'react'
import { Container } from "@mui/material";
import User from "./Textfields/user";
import Btn_submit from './Buttons/btn_submit';

import styles from "../../pages/ForgotPassword/forgotpassword.module.css"

function Forgot_Password_Container() {
  return (
    <React.Fragment>
      <Container maxWidth="md" className={styles.component1frame2}>
        <div className={styles.component1frame2Child} />

        {/* Reutilizando componente de login, para comparar ver login_container.tsx */}
        <h1 className={styles.logIn}>
          Forgot Password              
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

        <Btn_submit />
        <User />
      </Container>
    </React.Fragment>
  )
}

export default Forgot_Password_Container