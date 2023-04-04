import React from 'react';
import classes from './CourseUnit.module.css';

const CourseUnit = ({ unitNumber, unitTitle,unitTime}) => {
  let color = '';
  switch (unitNumber) {
    case 1:
      color = '#90D7FF';
      break;
    case 2:
      color = '#FFD480';
      break;
    case 3:
      color = '#CBA3FF';
      break;
    case 4:
      color = '#A8E4E1';
      break;
    case 5:
      color = '#8CBBE9';
      break;
    case 6:
      color = '#FBD2C5';
      break;
    default:
      color = '';
  }

  return (
    <div className={classes.unitContainer}>
      <div className={classes.unit} style={{ backgroundColor: color }}>
        {unitNumber}
      </div>
      <div className={classes.unitTitle}>{unitTitle}</div>
      {/* <div className={classes.unitTime}>{unitTime} min</div> */}
    </div>
  );
};

export default CourseUnit;
