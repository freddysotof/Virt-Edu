import React, { useEffect, useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useCourseStore } from '../../../hooks/useCourseStore';
import classes from '../../assets/css/courses/UnitsBox.module.css';
import CourseUnit from './CourseUnit';

const UnitsBox = () => {

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
  
  return (
    <div className={classes.unitsBox}>
      <div className={classes.unitContent}>
        <CourseUnit unitNumber={1} unitTitle={""} unitTime={30} />
        <CourseUnit unitNumber={2} unitTitle="Chapter 1" unitTime={30}/>
        <CourseUnit unitNumber={3} unitTitle="Chapter 2" unitTime={30}/>
        <CourseUnit unitNumber={4} unitTitle="Chapter 3" unitTime={30}/>
        <CourseUnit unitNumber={5} unitTitle="Chapter 4" unitTime={30}/>
        <CourseUnit unitNumber={6} unitTitle="Chapter 5" unitTime={30}/>

      </div>
    </div>
  );
};

export default UnitsBox;
