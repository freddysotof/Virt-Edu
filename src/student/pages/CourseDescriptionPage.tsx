import React, { useEffect, useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useCourseStore } from '../../hooks/useCourseStore';
import classes from '../assets/css/courses/CourseDescription.module.css';
import BasicTabs from '../components/courses/BasicTabs';
import CourseCompletion from '../components/courses/CourseCompletion';
import UnitsBox from '../components/courses/UnitsBox';

function CourseDescriptionPage() {
  const { id, ...rest } = useParams();

  const navigate=useNavigate();

  const {
    startLoadingCourseById,
    activeCourse
  } = useCourseStore();



  useEffect(() => {
    const onLoadAsync = async()=>{
      await  startLoadingCourseById(id)
    }
    onLoadAsync();
    
  }, [])
  
  // useEffect(() => {
  //   return async () => {
  //     
  //   }
   
  // }, [id])
  

  const onNavigateBack = ()=>{
    navigate(-1);
  }

  console.log(activeCourse);

  if (!id)
    return <Navigate to="/Courses" />


const imageUrl = activeCourse?.photoUrl;
  return (
    <>
      <div className={classes.courseDescriptionContainer}>
      <div className={classes.mainContainer}>
      <h2 className={classes.courseTitle}>{activeCourse?.code}</h2>
      <UnitsBox />
    <div >
      <div className={classes.imageContainer}>
        <img src={imageUrl} alt="Course Image" className={classes.image} />
      </div>
    <BasicTabs
    items={[
      { label: 'Description', content: <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum eros sed nisl malesuada, id consequat orci dignissim. Morbi id aliquet libero. Fusce placerat sit amet nisl in pretium. Phasellus lorem nisi, posuere nec ex ut, pellentesque malesuada nunc. Proin facilisis aliquet nibh non dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin molestie auctor nibh non porta. Suspendisse potenti. Mauris malesuada nec erat ac sollicitudin. Vivamus vitae scelerisque neque. Duis suscipit ultrices efficitur. Sed in libero porta, consequat erat in, dictum lectus. Nulla eu venenatis justo. Nam feugiat lacus sit amet ante efficitur varius. Donec vel enim id lorem fringilla facilisis.</div> },
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
