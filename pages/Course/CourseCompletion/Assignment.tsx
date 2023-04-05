import React from 'react';
import classes from './Assignment.module.css';

function Assignment({ id, title, date, completed}) {
  return (
    <div className={classes.assignment}>
      <div className={classes.assignmentDetails}>
        <h3 className={classes.title}>{title}</h3>
        <p>{date}</p>
        <div className={classes.assignmentStatus}>{completed ? 'true' : 'false'}</div>
      </div>
      
    </div>
  );
}

export default Assignment;
