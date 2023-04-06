import React from 'react';
import classes from './CourseCompletion.module.css';
import Assignment from './Assignment';

function CourseCompletion({ courseId }) {
  const assignments = [
    { id: "1", title: "suma bla bla bla bla bla bla bla bla bla bla", date: "1/2/2001", completed: true },
    { id: "2", title: "resta bla bla bla bla bla bla bla bla bla blanpm", date: "2/2/2001", completed: true },
    { id: "3", title: "multiplicacion bla bla bla bla bla bla bla bla bla blanpm", date: "3/2/2001", completed: true },
    { id: "6", title: "Division bla bla bla bla bla bla bla bla bla blanpm", date: "3/2/2001", completed: true },
    { id: "20", title: "Fracciones bla bla bla bla bla bla bla bla bla blanpm", date: "3/2/2001", completed: false },
    { id: "83", title: "Fracciones bla bla bla bla bla bla bla bla bla blanpm", date: "3/2/2001", completed: false },
    { id: "82", title: "Fracciones bla bla bla bla bla bla bla bla bla blanpm", date: "3/2/2001", completed: false },
    { id: "12", title: "Fracciones bla bla bla bla bla bla bla bla bla blanpm", date: "3/2/2001", completed: false },
    
  ];

  const completedAssignments = assignments.reduce((acc, curr) => curr.completed ? acc + 1 : acc, 0);
  const totalAssignments = assignments.length;
  const progress = (completedAssignments / totalAssignments) * 100;

  return (
    <div className={classes.courseCompletion}>
      <h2 className={classes.title}>Course Completion</h2>
      <div className={classes.progressHead}>
        <div className={classes.progressPercentage}>{`${progress}% completed`}</div>
        <div className={classes.progressText}>{`${completedAssignments} / ${totalAssignments}`}</div>
      </div>
      <div className={classes.progressBarContainer}>
        <div className={classes.progressBarCompleted} style={{ width: `${(completedAssignments / totalAssignments) * 100}%`, backgroundColor: '#FFA800' }}></div>
      </div>
      <div className={classes.assignmentsContainer}>
        {assignments.map((assignment, index) => (
          <div key={assignment.id} className={classes.assignment}>
            <span className={classes.assignmentNumber}>{`${index + 1}`}</span>
            <Assignment {...assignment} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCompletion;
