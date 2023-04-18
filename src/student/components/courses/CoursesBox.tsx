import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from "../../assets/css/courses/CoursesBox.module.css"
import { useCourseStore } from '../../../hooks/useCourseStore'

function CoursesBox(props) {
const navigate = useNavigate();
const {
  startLoadingCourseById

} = useCourseStore();

const onClick = async (courseId)=>{
  await startLoadingCourseById(courseId)
  navigate(`/Courses/${courseId}`)
}

  return (
    <div className={styles.courses}>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/Assets/svg/Courses/rectangle-20.svg" />
        <img className={styles.groupItem} alt="" src="/Assets/svg/Courses/rectangle-21@2x.png" />
        <div className={styles.quimicaIns356}>
          <p className={styles.quimica}>
            <span>
              <span className={styles.quimica1}>
                <span>{props.courseTitle}</span>
                <span>{` `}</span>
              </span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>
                <span>&nbsp;</span>
              </span>
            </span>
          </p>
          <p className={styles.ins356}>
            <span>
              <span>{props.courseId}</span>
            </span>
          </p>
        </div>
          <button className={styles.groupInner} onClick={()=>onClick(props.courseId)} />
          <div className={styles.seeMore}>See more</div>
      </div>
    </div>
  )
}

export default CoursesBox