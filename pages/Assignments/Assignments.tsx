import type { NextPage } from "next";
import styles from "./Assignments.module.css";
import { Layout } from '../../layout/Layout'

const Assignment: NextPage = () => {
  return (
    <Layout>
    <div className={styles.assignment}>
      <img className={styles.tabla1Icon} alt="" src="/Assets/svg/Assignments/tabla-1.svg" />
      <div className={styles.courses}>Courses</div>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="/Assets/svg/Assignments/group-41.svg" />
        <div className={styles.assignmentN}>MATH - 212</div>
      </div>
      <div className={styles.assignmentname}>{`01 - {AssignmentName}`}</div>
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
      <div className={styles.frameGroup}>
        <button className={styles.editAssignmentWrapper}>
          <div className={styles.editAssignment}>Edit Assignment</div>
        </button>
        <div className={styles.deleteAssignmentWrapper}>
          <div className={styles.assignmentdescription}>Delete Assignment</div>
        </div>
      </div>
      <div className={styles.assignmentState}>Assignment State</div>
      <div className={styles.groupes}>Groupes</div>
      <div className={styles.teams1}>Teams 1</div>
      <div className={styles.numberOfAttempts}>Number of Attempts</div>
      <div className={styles.attemptNumber1}>Attempt Number 1</div>
      <div className={styles.assignmentState1}>Assignment State</div>
      <div className={styles.send}>Send</div>
      <div className={styles.qualificationStatus}>Qualification Status</div>
      <div className={styles.noQualificated}>No Qualificated</div>
      <div className={styles.lastModified}>Last Modified</div>
      <div className={styles.div}>00/00/0000</div>
      <div className={styles.documentsSended}>Documents Sended</div>
      <div className={styles.examplepdf}>Example.pdf</div>
      <div className={styles.comments}>Comments</div>
      <div className={styles.comments0}>Comments (0)</div>
    </div>

    </Layout>
  );
};

export default Assignment;
