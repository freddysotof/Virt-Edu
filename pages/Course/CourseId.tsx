import React from 'react';
import CourseInfo from './CourseInfo';
import classes from './CourseId.module.css';
import UnitsBox from './UnitsBox';

const CourseId = ({ courseId }) => {
  const title = "Titulo del curso";
  const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  const imageUrl = 'https://www.disruptiva.media/wp-content/uploads/2020/03/Educacio%CC%81n-virtual-02-1024x576.jpg';


  return (
    <div className={classes.courseId}>
      <CourseInfo title={title} description={description} imageUrl={imageUrl} />
      <UnitsBox unitTitle={"Units"}/>
    </div>
  );
};

export default CourseId;
