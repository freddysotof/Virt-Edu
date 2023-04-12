import type { NextPage } from "next";
import styles from "./assignment-name.module.css";

const AssignmentName: NextPage = () => {
  return <div className={styles.assignmentname}>{`01 - {AssignmentName}`}</div>;
};

export default AssignmentName;
