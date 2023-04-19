import React from 'react';
import classes from '../../assets/css/courses/CourseCompletion.module.css';
import Assignment from './Assignment';
import { useCourseStore } from '../../../hooks/useCourseStore';


function CourseCompletion({ courseId }) {

  const {
    startLoadingCourseById,
    activeCourse
  } = useCourseStore();

  const assignments = [
    { id: "1", title: "suma bla bla bla bla bla bla bla bla bla bla", date: "1/2/2001", completed: true },
    { id: "2", title: "resta bla bla bla bla bla bla bla bla bla blanpm", date: "2/2/2001", completed: true },
    { id: "3", title: "multiplicacion bla bla bla bla bla bla bla bla bla blanpm", date: "3/2/2001", completed: true },
    { id: "6", title: "Division bla bla bla bla bla bla bla bla bla blanpm", date: "3/2/2001", completed: true },
    { id: "20", title: "Fracciones bla bla bla bla bla bla bla bla bla blanpm", date: "3/2/2001", completed: false },
    { id: "83", title: "Fracciones bla bla bla bla bla bla bla bla bla blanpm", date: "3/2/2001", completed: false },
    { id: "82", title: "Fracciones bla bla bla bla bla bla bla bla bla blanpm", date: "3/2/2001", completed: false },
    { id: "12", title: "Fracciones bla bla bla bla bla bla bla bla bla blanpm", date: "3/2/2001", completed: false },
    { id: "12", title: "Fracciones bla bla bla bla bla bla bla bla bla blanpm", date: "3/2/2001", completed: false },  //el título debe tener un mínimo de caracteres para que no se descuadre con el resto de los elementos del componente
  ];

  const completedAssignments = assignments.reduce((acc, curr) => curr.completed ? acc + 1 : acc, 0);
  const totalAssignments = assignments.length;
  const progress = ((completedAssignments / totalAssignments) * 100).toFixed(1);

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
        {activeCourse?.units.map((unit, index) =>{
          return unit?.assignments.map((assignment,index) => (
          <div key={assignment.id} className={classes.assignment}>
            <span className={classes.assignmentNumber}>{`${index + 1}`}</span>
            <Assignment
              {...assignment}
              title={assignment.name.length > 80 ? `${assignment.name.slice(0, 30)}...` : assignment.name} // Establecer un máximo de caracteres
            />
          </div>
          ))
        } )}
      </div>
    </div>
  );
}

export default CourseCompletion;
