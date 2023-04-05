import React from 'react';
import classes from './CourseCompletion.module.css';
import Assignment from './Assignment';

function CourseCompletion({ courseId }) {
  // Supongamos que tiene un valor de progreso del 50%
  const progress = 10;

  return (
    <div className={classes.courseCompletion}>
      <h2 className={classes.title}>Course Completion</h2>
      <div className={classes.progressText}>{`${progress}% completed`}</div>    
      <div className={classes.progressBarContainer}>
        <div className={classes.progressBarCompleted} style={{ width: `${progress}%`, backgroundColor: '#FFA800' }}></div>
      </div>
      <div className={classes.assignmentsContainer}>
        <Assignment id="1" title="suma bla bla bla bla bla bla bla bla bla bla" date="1/2/2001" completed={false} />
        <Assignment id="2" title="resta" date="2/2/2001" completed={true} />
        <Assignment id="3" title="multiplicacion" date="3/2/2001" completed={false} />
      </div>
    </div>
  );
}

export default CourseCompletion;
