import { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useCourseStore } from "../../hooks/useCourseStore";
import styles from "../assets/css/assignments/Assignments.module.css";
import { format } from "date-fns";

const AssignmentPage = () => {


  const { courseId, unitId, assignmentId, ...rest } = useParams();
  const navigate = useNavigate();

  const {
    startLoadingCourseById,
    activeCourse,
    setActiveCourse,
    setActiveUnit,
    setActiveAssignment,
    activeAssignment,
    activeUnit
  } = useCourseStore();

  useEffect(() => {
    const onLoadAsync = async () => {
      await startLoadingCourseById(courseId)
    }
    onLoadAsync();

  }, [])
  useEffect(() => {
    if (activeCourse) {
      const course = {...activeCourse};
      setActiveUnit(course.units.find(x => x.id === unitId))
      setActiveAssignment(course.units.find(x => x.id === unitId).assignments.find(x => x.id === assignmentId))
    }

  }, [activeCourse])


  const onClickEdit = () => {

    navigate(`Edit`);
  }


  const onNavigateBack = () => {
    setActiveAssignment(null);
    navigate(-1);
  }


  if (!assignmentId)
    return <Navigate to={`/Courses/${courseId}/Units/${unitId}`} />
  return (
    <>
      <div className={styles.assignment}>
        <img className={styles.tabla1Icon} alt="" src="/Assets/svg/Assignments/tabla-1.svg" />
        <div className={styles.courses}>Courses</div>
        <div className={styles.groupParent}>
          <img style={{ cursor: 'pointer' }} onClick={onNavigateBack} className={styles.frameChild} alt="" src="/Assets/svg/Assignments/group-41.svg" />
          <div className={styles.assignmentN} style={{ width: '100%' }}>{activeCourse?.name} - {activeCourse?.code} - {activeUnit?.title}</div>
        </div>
        <div className={styles.assignmentname}>{activeAssignment?.name}</div>
        <div className={styles.frameParent}>
          <div className={styles.startDate00000000Parent}>
            <div className={styles.startDate00000000Container}>
              <span>{`Start Date: `}</span>
              <span className={styles.span}>{activeAssignment && format(new Date(activeAssignment?.startDate), "dd/MM/yyyy")}</span>
            </div>
            <div className={styles.startDate00000000Container}>
              <span>{`End Date: `}</span>
              <span className={styles.span}>{activeAssignment && format(new Date(activeAssignment?.expirationDate), "dd/MM/yyyy")}</span>
            </div>
          </div>
          <div className={styles.assignmentdescriptionWrapper}>
            <div
              className={styles.assignmentdescription}
            >{activeAssignment?.description}</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <button className={styles.editAssignmentWrapper} onClick={onClickEdit}>
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

    </>
  );
};

export default AssignmentPage;
