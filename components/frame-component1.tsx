import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

const FrameComponent1: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.startDate00000000Parent}>
        <div className={styles.startDate00000000Container}>
          <span>{`Start Date: `}</span>
          <span className={styles.span}>00/00/0000</span>
        </div>
        <div className={styles.startDate00000000Container}>
          <span>{`End Date: `}</span>
          <span className={styles.span}>00/00/0000</span>
        </div>
      </div>
      <div className={styles.assignmentdescriptionWrapper}>
        <div
          className={styles.assignmentdescription}
        >{`{AssignmentDescription}.....`}</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
