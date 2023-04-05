import Login from "./Login/login";
import Dashboard from "./Dashboard/dashboard";
import { useState } from "react";
import { Layout } from "../layout/Layout";
import CourseId from "./Course/CourseDetails/CourseId";
import CourseDescription from "./Course/CourseDescription/CourseDescription";

function VirtEdu() {
  return (
    <CourseDescription courseId="curso-001" />
    // <CourseId courseId={"001"}/>
  );
}

export default VirtEdu;
