
import styles from "../../assets/css/assignments/assignment-name.module.css";

const AssignmentName = ({name}) => {
  return <div className={styles.assignmentname}>{name}</div>;
};

export default AssignmentName;
