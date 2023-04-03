import React from 'react';

const CourseUnit = ({ unitNumber }) => {
  return (
    <div>
      <h3>Unit {unitNumber}</h3>
      <p>Here goes the content of the unit {unitNumber}.</p>
    </div>
  );
};

export default CourseUnit;
