import { Route, Routes,Navigate } from 'react-router-dom'

import ForgotPasswordPage from '../../auth/pages/ForgotPasswordPage'
import { LoginPage } from '../../auth'


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='forgot-password' element={<ForgotPasswordPage/>}/>
        <Route path='/*' element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}