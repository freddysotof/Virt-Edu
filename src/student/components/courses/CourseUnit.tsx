import React from 'react';
import classes from '../../assets/css/courses/CourseUnit.module.css';
import { useNavigate } from 'react-router-dom';
import { useCourseStore } from '../../../hooks/useCourseStore';

const CourseUnit = ({ unit, unitNumber, unitTitle, unitTime, id, courseId }) => {
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

  const navigate = useNavigate();


  const {
    setActiveUnit
  } = useCourseStore();
  const onClick = () => {

    navigate(`Units/${id}`)
    setActiveUnit(unit);
  }

  return (
    <div className={classes.unitContainer} style={{ cursor: 'pointer' }} onClick={onClick}>
      <div className={classes.unit} style={{ backgroundColor: color }}>
        {unitNumber}
      </div>
      <div className={classes.unitTitle}>{unitTitle}</div>
      {/* <div className={classes.unitTime}>{unitTime} min</div> */}
    </div>
  );
};

export default CourseUnit;
