
import styles from "../assets/css/assignments/AEdit.module.css";
import AssignmentName from "../components/assignments/assignment-name";
import FrameComponent1 from "../components/assignments/frame-component1";

const AssignmentEditPage = () => {
  return (
    <div className={styles.assignmentEdit}>
      <div className={styles.courses}>Courses</div>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="/Assets/svg/Assignments_Edit/group-41.svg" />
        <div className={styles.addAssignmentN}>MATH - 212</div>
      </div>
      <AssignmentName />
      <div className={styles.assignmentEditInner}>
        <FrameComponent1 />
      </div>
      <div className={styles.addAssignmentWrapper}>
        <div className={styles.addAssignment}>Add Assignment</div>
      </div>
      <div className={styles.groupContainer}>
        <img className={styles.frameItem} alt="" src="/Assets/svg/Assignments_Edit/group-289591.svg" />
        <div className={styles.frameItem}>
          <div className={styles.groupChild} />
          <img className={styles.downloadIcon} alt="" src="/Assets/svg/Assignments_Edit/folder-1-1.svg" />
        </div>
        <div className={styles.frameItem}>
          <div className={styles.groupChild} />
          <img className={styles.downloadIcon} alt="" src="/Assets/svg/Assignments_Edit/download.svg" />
        </div>
      </div>
      <img
        className={styles.assignmentEditChild}
        alt=""
        src="/Assets/svg/Assignments_Edit/group-2895911.svg"
      />
      <img
        className={styles.assignmentEditItem}
        alt=""
        src="/Assets/svg/Assignments_Edit/group-289593.svg"
      />
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild} />
        <img className={styles.downloadIcon} alt="" src="/Assets/svg/Assignments_Edit/folder-1-1.svg" />
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.saveChangesWrapper}>
        <div className={styles.addAssignment}>Save changes</div>
      </div>
      <div className={styles.cancelWrapper}>
        <div className={styles.addAssignment}>Cancel</div>
      </div>
    </div>
  );
};

export default AssignmentEditPage;
