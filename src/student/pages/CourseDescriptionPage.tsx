import React, { useEffect, useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useCourseStore } from '../../hooks/useCourseStore';
import classes from '../assets/css/courses/CourseDescription.module.css';
import BasicTabs from '../components/courses/BasicTabs';
import CourseCompletion from '../components/courses/CourseCompletion';
import UnitsBox from '../components/courses/UnitsBox';
import { FiArrowLeft } from 'react-icons/fi';


function CourseDescriptionPage() {
  const { id, ...rest } = useParams();

  const navigate=useNavigate();

  const {
    startLoadingCourseById,
    activeCourse,
    setActiveCourse
  } = useCourseStore();

  useEffect(() => {
    const onLoadAsync = async()=>{
      await  startLoadingCourseById(id)
    }
    onLoadAsync();
    
  }, [])
  

  const onNavigateBack = ()=>{
    setActiveCourse(null);
    navigate(-1);
  }


  if (!id)
    return <Navigate to="/Courses" />


const imageUrl = activeCourse?.photoUrl;
  return (
    <>
      <div className={classes.courseDescriptionContainer}>
      <div className={classes.mainContainer}>
      <div className={classes.head}>
      
  <FiArrowLeft className={`${classes.icon} ${classes.iconArrow}`} style={{cursor:'pointer'}} onClick={onNavigateBack} />


      <h2 className={classes.courseTitle}>{activeCourse?.code}</h2>
      </div>
      <UnitsBox />
    <div >
      <div className={classes.imageContainer}>
        <img src={imageUrl} alt="Course Image" className={classes.image} />
      </div>
    <BasicTabs
    items={[
      { label: 'Description', content: <div>{activeCourse?.units[0].content}</div> },
      { label: 'Revisions', content: <div>blabladsdsdas</div> },
      { label: 'Discussions', content: <div>Lorem ipsum dolo</div> },
      { label: 'Resources', content: <div>Lorem ipsum dolor sit amet, c.</div> },
    ]}
  />
  </div>
  </div>
  <div className={classes.courseCompletionContainer}>
  <CourseCompletion courseId={activeCourse?.id}/>
  </div>
  </div>

  </>
        
  
    
  );
}

export default CourseDescriptionPage;
