import { useCallback } from "react";
import { TextField, Input, Icon } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const RegisterLogIn = () => {
  const router = useRouter();

  const onRectangleButtonClick = useCallback(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <div className={styles.registerlogIn}>
      <label className={styles.virtedu}>
        <span>Virt</span>
        <span className={styles.edu}>Edu</span>
      </label>
      <button className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="/ellipse-1.svg" />
        <img className={styles.pregunta1Icon} alt="" src="/pregunta-1.svg" />
      </button>
      <form className={styles.component1frame2}>
        <div className={styles.component1frame2Child} />
        <h1 className={styles.logIn} id="Log In">
          Log In
        </h1>
        <img
          className={styles.component1frame2Item}
          alt=""
          src="/line-1@2x.png"
        />
        <img
          className={styles.component1frame2Inner}
          alt=""
          src="/line-2@2x.png"
        />
        <button
          className={styles.rectangleButton}
          onClick={onRectangleButtonClick}
        />
        <div className={styles.logIn1}>Log In</div>
        <TextField
          className={styles.rectangleTextfield}
          sx={{ width: 672 }}
          color="primary"
          variant="standard"
          defaultValue="ID"
          type="text"
          label="Label"
          placeholder="Placeholder"
          size="medium"
          margin="none"
        />
        <TextField
          className={styles.component1frame2Child1}
          sx={{ width: 672 }}
          color="primary"
          variant="standard"
          defaultValue="Password"
          type="text"
          label="Label"
          placeholder="Placeholder"
          size="medium"
          margin="none"
        />
      </form>
    </div>
  );
};

export default RegisterLogIn;
