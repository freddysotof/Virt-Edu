
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCheckAuth } from "../../hooks";
import { useGradeStore } from "../../hooks/useGradeStore";

import styles from "../assets/css/Grades.module.css"

function GradePage() {

  const { grades } = useGradeStore();

  const navigate = useNavigate();
  const onViewDetail = (id) => {
    navigate(`/Grades/${id}`);

  }
  return (
    <>

      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.courseWrapper}>
            <label className={styles.course}>Course</label>
          </div>
          <div className={styles.courseWrapper}>
            <label className={styles.course}>Mid-Term</label>
          </div>
          <div className={styles.finalWrapper}>
            <label className={styles.course}>Final</label>
          </div>
        </div>
        {grades.map((grade, index) => (
          <div className={styles.frameContainer} onClick={()=>onViewDetail(grade.id)} style={{ cursor: 'pointer' }}>

            <p className={styles.technologyWrapper}>
              <div className={styles.course}>{grade.course.name}</div>
            </p>
            <p className={styles.technologyWrapper}>
              <div className={styles.course}>{grade.score}</div>
            </p>
            <p className={styles.container}>
              <div className={styles.course}>{grade.publishDate}</div>
            </p>

          </div>
        ))}
        {/* <div className={styles.frameContainer}>
          <p className={styles.technologyWrapper}>
            <div className={styles.course}>Technology</div>
          </p>
          <p className={styles.technologyWrapper}>
            <div className={styles.course}>90</div>
          </p>
          <p className={styles.container}>
            <div className={styles.course}>90</div>
          </p>
        </div>
        <div className={styles.frameDiv}>
          <p className={styles.scienceWrapper}>
            <div className={styles.course}>Science</div>
          </p>
          <p className={styles.scienceWrapper}>
            <div className={styles.course}>75</div>
          </p>
          <p className={styles.frameP}>
            <div className={styles.course}>75</div>
          </p>
        </div>
        <div className={styles.frameContainer}>
          <p className={styles.technologyWrapper}>
            <div className={styles.course}>Math</div>
          </p>
          <p className={styles.technologyWrapper}>
            <div className={styles.course}>60</div>
          </p>
          <p className={styles.container}>
            <div className={styles.course}>60</div>
          </p>
        </div>
        <div className={styles.frameDiv}>
          <p className={styles.scienceWrapper}>
            <div className={styles.course}>Writing</div>
          </p>
          <p className={styles.scienceWrapper}>
            <div className={styles.course}>32</div>
          </p>
          <p className={styles.frameP}>
            <div className={styles.course}>32</div>
          </p>
        </div>
        <div className={styles.frameContainer}>
          <p className={styles.technologyWrapper}>
            <div className={styles.course}>Elective</div>
          </p>
          <p className={styles.technologyWrapper}>
            <div className={styles.course}>50</div>
          </p>
          <p className={styles.container}>
            <div className={styles.course}>50</div>
          </p>
        </div>
        <div className={styles.frameDiv}>
          <p className={styles.scienceWrapper}>
            <div className={styles.course}>History</div>
          </p>
          <p className={styles.scienceWrapper}>
            <div className={styles.course}>70</div>
          </p>
          <p className={styles.frameP}>
            <div className={styles.course}>70</div>
          </p>
        </div>
        <div className={styles.frameContainer}>
          <p className={styles.technologyWrapper}>
            <div className={styles.course}>Physical Education</div>
          </p>
          <p className={styles.technologyWrapper}>
            <div className={styles.course}>32</div>
          </p>
          <p className={styles.container}>
            <div className={styles.course}>32</div>
          </p>
        </div>
        <div className={styles.frameDiv}>
          <p className={styles.musicWrapper}>
            <div className={styles.course}>Music</div>
          </p>
          <p className={styles.musicWrapper}>
            <div className={styles.course}>50</div>
          </p>
          <p className={styles.wrapper12}>
            <div className={styles.course}>50</div>
          </p>
        </div>
        <div className={styles.frameContainer}>
          <p className={styles.satPrepWrapper}>
            <div className={styles.course}>SAT Prep</div>
          </p>
          <p className={styles.satPrepWrapper}>
            <div className={styles.course}>70</div>
          </p>
          <p className={styles.wrapper14}>
            <div className={styles.course}>70</div>
          </p>
        </div>
        <div className={styles.frameDiv}>
          <p className={styles.musicWrapper}>
            <div className={styles.course}>Seminar</div>
          </p>
          <p className={styles.musicWrapper}>
            <div className={styles.course}>50</div>
          </p>
          <p className={styles.wrapper12}>
            <div className={styles.course}>50</div>
          </p>
        </div> */}
      </div>
    </>
  );
}




export default GradePage;
