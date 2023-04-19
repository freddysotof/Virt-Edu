import React, { useEffect } from "react";
import { Grid, Box } from "@mui/material";
import styles from "../assets/css/assignments/AssignmentList.module.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useCourseStore } from "../../hooks/useCourseStore";
import { FiArrowLeft } from "react-icons/fi";
import classes from '../assets/css/courses/UnitsBox.module.css';

const rectangulos = [
  { id: 1, text: "Ensayo", img: "/Assets/svg/Assignments/icon.svg" },
  { id: 2, text: "Practica", img: "/Assets/svg/Assignments/icon.svg" },
  { id: 3, text: "Quiz", img: "/Assets/svg/Assignments/icon.svg" },
  { id: 4, text: "Control de lectura", img: "/Assets/svg/Assignments/icon.svg" },
  { id: 5, text: "Quiz", img: "/Assets/svg/Assignments/icon.svg" },
  { id: 6, text: "Med term", img: "/Assets/svg/Assignments/icon.svg" },
  { id: 7, text: "Analisis", img: "/Assets/svg/Assignments/icon.svg" },
];

const UnitPage = () => {

  const { courseId, unitId, ...rest } = useParams();
  const navigate = useNavigate();

  const {
    startLoadingCourseById,
    activeCourse,
    setActiveCourse,
    setActiveUnit,
    setActiveAssignment,
    activeUnit
  } = useCourseStore();

  useEffect(() => {
    const onLoadAsync = async () => {
      await startLoadingCourseById(courseId)
    }
    onLoadAsync();

  }, [])

  useEffect(() => {
    if (activeCourse)
      setActiveUnit({ ...activeCourse }.units.find(x => x.id === unitId))
  }, [activeCourse])



  const onNavigateBack = () => {
    setActiveUnit(null);
    navigate(-1);
  }

  const onClick = (assignment) => {

    setActiveAssignment(assignment);
    navigate(`Assignments/${assignment.id}`);
  }





  if (!unitId)
    return <Navigate to={`/Courses/${courseId}`} />

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "140vh" }}>
      <div className={styles.header}>
        {/* <div className={styles.courses}>Courses</div> */}
        <div style={{ position: "fixed", zIndex: 1 }}></div>
        <Grid container alignItems="center" justifyContent="" maxWidth={1800} sx={{ height: "100%" }}>
          <Grid item sx={{ mr: 3, ml: 3 }}>
            <Grid item>
              <div className={styles.t}>24h 13m</div>
              <div className={styles.t1}>24h 13m</div>
              <div className={styles.t2}>24h 13m</div>
              <div className={styles.t3}>24h 13m</div>
              {/* <div className={styles.t4}>24h 13m</div>
              <div className={styles.t5}>24h 13m</div>
              <div className={styles.t6}>24h 13m</div> */}

              <div className={styles.p}>46%</div>
              <div className={styles.p1}>46%</div>
              <div className={styles.p2}>46%</div>
              <div className={styles.p3}>46%</div>
              {/* <div className={styles.p4}>46%</div>
              <div className={styles.p5}>46%</div>
              <div className={styles.p6}>46%</div> */}

              <div className={styles.c}>5/6</div>
              <div className={styles.c1}>5/6</div>
              <div className={styles.c2}>5/6</div>
              <div className={styles.c3}>5/6</div>
              {/* <div className={styles.c4}>5/6</div>
              <div className={styles.c5}>5/6</div>
              <div className={styles.c6}>5/6</div> */}
            </Grid>
          </Grid>
        </Grid>
        <div className={styles.assignment}>

          <img className={styles.tabla1Icon} alt="" src="/Assets/svg/Assignments/group-41.svg" style={{ cursor: 'pointer' }} onClick={onNavigateBack} />
          <div className={styles.assignmentN} style={{ width: '100%' }}>{activeCourse?.name} - {activeCourse?.code} - {activeUnit?.title}</div>

        </div>
      </div>
      <Grid container direction="column" maxWidth={1800} spacing={4}>
        {activeUnit?.assignments.map((assignment) => (
          <Grid onClick={() => onClick(assignment)} style={{ cursor: 'pointer' }} key={assignment.id} item>
            <Box

              sx={{
                width: "982px",
                height: "81px",
                background: "#FFFFFF",
                boxShadow: "0px 0px 15px rgba(99, 46, 210, 0.15)",
                borderRadius: "7px",
                mx: "auto",
                ml: 20.5, // Mueve los grids 50px a la izquierda
              }}
            >
              <Grid container alignItems="center" justifyContent="" sx={{ height: "100%" }}>
                <Grid item sx={{ mr: 3, ml: 3 }}>
                  <img src={'/Assets/svg/Assignments/icon.svg'} alt="" style={{ height: "40px", }} />

                </Grid>
                <Grid item>{assignment.name}</Grid>
                <div className={styles.prueb}>{assignment.description}</div>
                <div className={styles.prueb1}>Asignatura x</div>
                <div className={styles.prueb2}>Asignatura x</div>
                <div className={styles.prueb3}>Asignatura x</div>
                {/* <div className={styles.prueb4}>Asignatura x</div>
                <div className={styles.prueb5}>Asignatura x</div>
                <div className={styles.prueb6}>Asignatura x</div> */}

              </Grid>


            </Box>


          </Grid>

        ))}
      </Grid>

    </Box>
  );
};

export default UnitPage;




