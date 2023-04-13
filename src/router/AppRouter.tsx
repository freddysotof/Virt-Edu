import { Navigate, Route, Routes } from 'react-router-dom'
import { StudentRoutes } from './routes/StudentRoutes'
import { useCheckAuth } from '../hooks';
import { AuthRoutes, VirtEduRoutes } from './routes';
import React from 'react'
import { Help } from '../pages/Help';
export const AppRouter = () => {
  const { status } = useCheckAuth();
 

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
