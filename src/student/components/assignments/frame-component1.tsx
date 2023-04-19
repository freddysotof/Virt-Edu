
import styles from "../../assets/css/assignments/frame-component1.module.css";

const FrameComponent1 = ({description,startDate,expirationDate}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.startDate00000000Parent}>
        <div className={styles.startDate00000000Container}>
          <span>{`Start Date: `}</span>
          <span className={styles.span}>{startDate}</span>
        </div>
        <div className={styles.startDate00000000Container}>
          <span>{`End Date: `}</span>
          <span className={styles.span}>{expirationDate}</span>
        </div>
      </div>
      <div className={styles.assignmentdescriptionWrapper}>
        <div
          className={styles.assignmentdescription}
        >{description}</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
