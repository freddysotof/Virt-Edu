import Login from "./Login/login";
import Dashboard from "./Dashboard/dashboard";
import { useState } from "react";
import { Layout } from "../layout/Layout";
import Grades from "./Grades/Grades";
import SideBar_Schedule from "./Schedule/SideBar_Schedule";
import CourseId from "./Course/CourseId";
function VirtEdu() {
  return (
    <CourseId courseId="curso-001" />
  ); // Layout es el sidebar + navbar
}

export default VirtEdu;
