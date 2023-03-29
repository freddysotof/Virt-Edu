import React from "react";
import { Container } from "@mui/material";
import User from "./Textfields/user";
import Password from "./Textfields/password";
import Btn_login from "./Buttons/btn_login";
import Link from "next/link";
import { Fragment } from "react";

import styles from "../../pages/Login/login.module.css";
import { useAuthStore, useForm } from "../../hooks";

// const Login_Container: NextPage = ( {setisLogged} ) => {
  const initialFormValues = {
    username:'',
    password:''
  }
function Login_Container() {


  const {
    startLogin
  } = useAuthStore()
  // const onRectangleButtonClick = useCallback(() => { router.push("/dashboard"); }, [router]);

  const {
    formState,
    username,
    password,
    onInputChange
  } = useForm(initialFormValues);

  const onClickLogin = async ()=>{
    await startLogin({username,password});
  }
  return (
    <Fragment>
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
        <Link href="/ForgotPassword/ForgotPassword">
        <a className={styles.forgotPassword}>
          Forgot password?
        </a>
        </Link>

        <Btn_login onClick={onClickLogin}  />
        <User value={username} onChange={onInputChange}  />
        <Password value={password} onChange={onInputChange} />
      </Container>
    </Fragment>
  );
}

export default Login_Container;
// Botones de redireccion : use navigate
// <App>
//   <Routing>
//     {
//       isLogged? <ContentLayout>
//         <Routes path={'/dashborad'} element={<Dashboard/>}></Routes>
//         <Routes path={'/courses'} element={<Courses/>}></Routes>
//       </ContentLayout>
//       : <AuthLayout></AuthLayout>
//     }
//   </Routing>
// </App>
