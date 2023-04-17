
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { StudentLayout } from '../../student/layout/StudentLayout'
import CoursePage from '../../student/pages/CoursePage'
import DashboardPage from '../../student/pages/DashboardPage'
import MessagePage from '../../student/pages/MessagePage'
import SchedulePage from '../../student/pages/SchedulePage'
import GradePage from '../../student/pages/GradePage'
import { ProfileLayout } from '../../layout/ProfileLayout'
import CourseDetailPage from '../../student/pages/CourseDetailPage'
import CourseDescriptionPage from '../../student/pages/CourseDescriptionPage'
import AssignmentPage from '../../student/pages/AssignmentPage'
import AssignmentEditPage from '../../student/pages/AssignmentEditPage'
import GradeDetailPage from '../../student/pages/GradeDetailPage'

// const {BackTop} = FloatButton;
export const StudentRoutes = () => {
    return (
        <>



            <StudentLayout>
                <Routes>
                    <Route path='/' element={<DashboardPage />}></Route>
                    <Route path='/Courses' element={<CoursePage />}></Route>
                    <Route path='/Courses/:id/Details' element={<CourseDetailPage />}></Route>
                    <Route path='/Courses/:id/Description' element={<CourseDescriptionPage />}></Route>
                    <Route path='/Courses/:id' element={<CourseDescriptionPage />}></Route>
                    <Route path='/Messages' element={<MessagePage />}></Route>
                    <Route path='/Schedule' element={<SchedulePage />}></Route>
                    <Route path='/Grades' element={<GradePage />}></Route>
                    <Route path='/Grades/:id' element={<GradeDetailPage />}></Route>
                    <Route path='/Assignments' element={<AssignmentPage />}></Route>
                    <Route path='/Assignments/Edit' element={<AssignmentEditPage />}></Route>
                    <Route path='/*' element={<Navigate to="/" />}></Route>

                </Routes>
            </StudentLayout>
        </>

    )
}
