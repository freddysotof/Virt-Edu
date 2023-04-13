import React from 'react';
import classes from '../../assets/css/courses/CourseInfo.module.css';

const CourseInfo = ({ title, description, imageUrl }) => {
  return (
    <div className={classes.courseContainer}>
      <div className={classes.courseInfo}>
        <h2 className={classes.courseTitle}>{title}</h2>
        <p className={classes.courseDescription}>{description}</p>
      </div>
      <div className={classes.imageContainer}>
        <img src={imageUrl} alt="Course Image" className={classes.image} />
      </div>
    </div>
  );
};

export default CourseInfo;
