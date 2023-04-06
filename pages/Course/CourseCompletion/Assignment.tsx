import React from 'react';
import { FaCheck } from 'react-icons/fa';
import classes from './Assignment.module.css';

function Assignment({ id, title, date, completed}) {
  return (
    <div className={classes.assignment}>
      <div className={classes.assignmentDetails}>
        <h3 className={completed ? classes.completed : classes.notCompleted}>{title}</h3>
        <div className={classes.assignmentStatus}>
          {completed ? <FaCheck color="#FFA800" size={20} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default Assignment;
