import React from "react";
import { TextField } from "@mui/material";
import styles from "../../../pages/Login/login.module.css";

function Password({value,onChange}) {
  return (
    <TextField
      className={styles.component1frame2Child1}
      sx={{ width: 672 }}
      color="primary"
      variant="standard"
      type="password"
      label="Password"
      name="password"
      onChange={onChange}
      value={value}
      placeholder="Placeholder"
      size="medium"
      margin="none"
      required
    />
  );
}

export default Password;
