import { Navigate, Route, Routes } from 'react-router-dom'
import { StudentRoutes } from './routes/StudentRoutes'
import { useCheckAuth } from '../hooks';
import { AuthRoutes, VirtEduRoutes } from './routes';
import React, { useEffect } from 'react'
import { Help } from '../pages/Help';
import { useCourseStore } from '../hooks/useCourseStore';
import { useScheduleStore } from '../hooks/useScheduleStore';
import { useGradeStore } from '../hooks/useGradeStore';
export const AppRouter = () => {
  const { status } = useCheckAuth();



  const { startLoadingCoursesByUser } = useCourseStore();

  const { startLoadingEventsByUser } = useScheduleStore();

  const { startLoadingGradesByStudentId} = useGradeStore();
  useEffect(() => {
    console.log(status);
    if (status === 'authenticated') {
      startLoadingCoursesByUser();
      startLoadingEventsByUser();
      startLoadingGradesByStudentId();
    }

    // checkAuthToken()
  }, [status])
  // if (status === 'checking')
  //   return <CheckingAuth />;

  return (
    <React.Fragment>
      <Routes>

        {
          (status === 'authenticated')
            ? <Route path='/*' element={<VirtEduRoutes />} />
            : <Route path='/auth/*' element={<AuthRoutes />} />
        }

        <Route path='/help' element={<Help />} />
        <Route path='/*' element={<Navigate to='/auth/login' />} />
      </Routes>
    </React.Fragment>

  )
}
