import React from 'react';
import CourseUnit from './CourseUnit';
import classes from './UnitsBox.module.css';

const UnitsBox = ({ unitTitle }) => {
  return (
    <div className={classes.unitsBox}>
      <h2>{unitTitle}</h2>
      <CourseUnit UnitNumber={1} />
      <CourseUnit UnitNumber={2} />
      <CourseUnit UnitNumber={3} />
    </div>
  );
};

export default UnitsBox;
