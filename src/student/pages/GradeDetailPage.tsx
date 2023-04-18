import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import { Box } from "@mui/material";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useCourseStore } from "../../hooks/useCourseStore";
import { useGradeStore } from "../../hooks/useGradeStore";

const GradeDetailPage = () => {
  const { id, ...rest } = useParams();
  const navigate=useNavigate();

  const {
    startLoadingGradeById,
    activeGrade
  } = useGradeStore();

  useEffect(() => {
    const onLoadAsync = async()=>{
      await  startLoadingGradeById(id)
    }
    onLoadAsync();
    
  }, [])

  const onNavigateBack = ()=>{
    navigate(-1);
  }

  if (!id)
    return <Navigate to="/Grades" />


  const grades_arr = [
    {
      assignment: "Practica 1",
      grade: 18,
      value: 20,
      percentage: "90%",
      publish_date: "03/05/22",
    },
    {
      assignment: "Practica 2",
      grade: 29,
      value: 30,
      percentage: "96.67%",
      publish_date: "26/5/22",
    },
    {
      assignment: "Practica 3",
      grade: 16,
      value: 20,
      percentage: "80%",
      publish_date: "12/6/22",
    },
    {
      assignment: "Practica 4",
      grade: 26,
      value: 30,
      percentage: "86.67%",
      publish_date: "28/6/22",
    },
    {

    },
    {
        assignment: "Total",
        grade: "89",
        value: "100",
        percentage: "89%"
    }
  ];

  const renderGrade = (grades, index) => {
    return (
      <tr key={index}>
        <td>{grades.assignment}</td>
        <td>{grades.grade}</td>
        <td>{grades.value}</td>
        <td>{grades.percentage}</td>
        <td>{grades.publish_date}</td>
      </tr>
    );
  };
  return (
    <div>
        <div className="w-80 p-3">
          <Box sx={{ pt: 40, pl: 35 }}>
            <ReactBootStrap.Table striped hover>
              <thead>
                <tr>
                  <th>Assignment</th>
                  <th>Grade</th>
                  <th>Value</th>
                  <th>Percentage</th>
                  <th>Publish Date</th>
                </tr>
              </thead>
              <tbody>{grades_arr.map(renderGrade)}</tbody>
            </ReactBootStrap.Table>
          </Box>
        </div>
    </div>
  );
};

export default GradeDetailPage;