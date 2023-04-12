import React from 'react'
import { TextField } from "@mui/material";
import styles from "../../../pages/Login/login.module.css"

function User({value,onChange}) {
  return (
    <TextField
            className={styles.rectangleTextfield}
            sx={{ width: 672 }}
            color="primary"
            variant="standard"
            type="text"
            label="ID"
            placeholder="Placeholder"
            size="medium"
            margin="none"
            required
            value={value}
            name={'email'}
            onChange={onChange}
          />
  )
}

export default User