import React, { useEffect, useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useCourseStore } from '../../hooks/useCourseStore';
import classes from '../assets/css/courses/CourseDescription.module.css';
import BasicTabs from '../components/courses/BasicTabs';
import CourseCompletion from '../components/courses/CourseCompletion';

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

  if (!id)
    return <Navigate to="/Courses" />


const imageUrl = 'https://www.disruptiva.media/wp-content/uploads/2020/03/Educacio%CC%81n-virtual-02-1024x576.jpg';
  return (
    <>
        
  
    <div className={classes.courseDescriptionContainer}>
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
  <div className={classes.courseCompletionContainer}>
  <CourseCompletion courseId={activeCourse?.id}/>
  </div>
  </div>
  </>
        
  
    
  );
}

export default CourseDescriptionPage;
