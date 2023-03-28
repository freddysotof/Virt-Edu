import React from 'react'
import styles from "../CoursesBox/CoursesBox.module.css"

function CoursesBox(props) {
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
        <button className={styles.groupInner} />
        <div className={styles.seeMore}>See more</div>
      </div>
    </div>
  )
}

export default CoursesBox