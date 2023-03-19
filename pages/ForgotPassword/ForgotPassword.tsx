// our-domain.com/ForgotPassword/ForgotPassword

import React from 'react'
import Logo from "../../components/Logo/logo";
import Btn_ayuda from "../../components/Containers/Buttons/btn_ayuda";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

import styles from "../ForgotPassword/forgotpassword.module.css"


function ForgotPassword() {
  return (
    <div className={styles.passwordReset}>
      <div className={styles.virtedu}>
        <span>Virt</span>
        <span className={styles.edu}>Edu</span>
      </div>
      <button className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="/Assets/svg/ellipse-1.svg" />
        <img className={styles.pregunta1Icon} alt="" src="/Assets/svg/pregunta-1.svg" />
      </button>
      <div className={styles.component1frame2}>
        <h1 className={styles.logIn} id="Log In">
          Password Reset
        </h1>
        <img
          className={styles.component1frame2Child}
          alt=""
          src="/Assets/images/line-1@2x.png"
        />
        <img
          className={styles.component1frame2Item}
          alt=""
          src="/Assets/images/line-2@2x.png"
        />
        <button className={styles.component1frame2Inner} />
        <div className={styles.logIn1}>Log In</div>
        <TextField
          className={styles.rectangleTextfield}
          sx={{ width: 672 }}
          color="primary"
          variant="filled"
          defaultValue="ID"
          type="text"
          label="Label"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className={styles.component1frame2Child1}
          sx={{ width: 672 }}
          color="primary"
          variant="filled"
          type="text"
          label="Id"
          size="medium"
          margin="none"
          required
        />
        {/* <button
          className={styles.forgotPassword}
          onClick={onForgotPasswordClick}
        >
          Forgot password?
        </button> */}
      </div>
      <h2 className={styles.enterYourInstitutional}>
        Enter your institutional Id
      </h2>
      <div className={styles.submit}>Submit</div>
      <h1 className={styles.passwordReset1}>Password Reset</h1>
    </div>
    // <div className={styles.registerlogIn}>
    //     <Logo/>
    //     <Btn_ayuda/>
    //     <Forgot_Password_Container /> 
    //   </div>
  )
}

export default ForgotPassword