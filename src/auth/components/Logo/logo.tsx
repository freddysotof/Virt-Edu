import React from "react";
import styles from "../../assets/login.module.css"

function Logo() {
  
  return (
    <label className={styles.virtedu}>
      <span>Virt</span>
      <span className={styles.edu}>Edu</span>
    </label>
  );
}

export default Logo;
