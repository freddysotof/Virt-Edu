import {useEffect} from 'react';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useCourseStore } from "../../hooks/useCourseStore";
import styles from "../assets/css/assignments/AEdit.module.css";
import AssignmentName from "../components/assignments/assignment-name";
import FrameComponent1 from "../components/assignments/frame-component1";

const AssignmentEditPage = () => {
  const { courseId, unitId,assignmentId, ...rest } = useParams();
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
    const onLoadAsync = async()=>{
      await  startLoadingCourseById(courseId)
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


  
  const onClickEdit = ()=>{
    
    navigate(`Edit`);
  }


  const onNavigateBack = () => {
    navigate(-1);
  }


  if (!assignmentId)
    return <Navigate to={`/Courses/${courseId}/Units/${unitId}`} />
  return (
    <div className={styles.assignmentEdit}>
      <div className={styles.courses}>Courses</div>
      <div className={styles.groupParent}>
        <img onClick={onNavigateBack} style={{cursor:'pointer'}} className={styles.frameChild} alt="" src="/Assets/svg/Assignments_Edit/group-41.svg" />
        <div className={styles.addAssignmentN} style={{width:'100%'}}>{activeCourse?.name} - {activeCourse?.code} - {activeUnit?.title}</div>
      </div>
      <AssignmentName name={activeAssignment?.name} />
      <div className={styles.assignmentEditInner}>
        <FrameComponent1 {...activeAssignment} />
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
      <div className={styles.cancelWrapper} onClick={onNavigateBack} style={{cursor:'pointer'}}>
        <div className={styles.addAssignment}>Cancel</div>
      </div>
    </div>
  );
};

export default AssignmentEditPage;
