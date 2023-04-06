import React from 'react';
import classes from './CourseCompletion.module.css';
import Assignment from './Assignment';

function CourseCompletion({ courseId }) {
  const assignments = [
    { id: "1", title: "suma bla bla bla bla bla bla bla bla bla bla", date: "1/2/2001", completed: true },
    { id: "2", title: "resta", date: "2/2/2001", completed: true },
    { id: "3", title: "multiplicacion", date: "3/2/2001", completed: false },
    { id: "6", title: "Division ", date: "3/2/2001", completed: true },
  ];

  // Usamos reduce para contar la cantidad de asignaciones completadas
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
            <span>{`${index + 1}.`}</span>
            <Assignment {...assignment} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCompletion;
