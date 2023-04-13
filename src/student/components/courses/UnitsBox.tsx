import React from 'react';
import classes from '../../assets/css/courses/UnitsBox.module.css';
import CourseUnit from './CourseUnit';

const UnitsBox = ({ unitTitle }) => {
  return (
    <div className={classes.unitsBox}>
      <div className={classes.title}>{unitTitle}</div>
      <div className={classes.unitContent}>
        <CourseUnit unitNumber={1} unitTitle="Introduction" unitTime={30} />
        <CourseUnit unitNumber={2} unitTitle="Chapter 1" unitTime={30}/>
        <CourseUnit unitNumber={3} unitTitle="Chapter 2" unitTime={30}/>
        <CourseUnit unitNumber={4} unitTitle="Chapter 3" unitTime={30}/>
        <CourseUnit unitNumber={5} unitTitle="Chapter 4" unitTime={30}/>
        <CourseUnit unitNumber={6} unitTitle="Chapter 5" unitTime={30}/>
        <CourseUnit unitNumber={7} unitTitle="Chapter 6" unitTime={30}/>
        <CourseUnit unitNumber={8} unitTitle="Chapter 7" unitTime={30}/>
        <CourseUnit unitNumber={9} unitTitle="Conclusion" unitTime={30}/>
      </div>
    </div>
  );
};

export default UnitsBox;
